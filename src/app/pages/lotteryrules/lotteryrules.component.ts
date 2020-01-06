import { Component, OnInit, Inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, Observer } from 'rxjs';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-lotteryrules',
  templateUrl: './lotteryrules.component.html',
  styleUrls: ['./lotteryrules.component.css']
})
export class LotteryrulesComponent implements OnInit {
  eventList: any;
  value: any;
  couponList: any;
  lotteryruleData: any;
  matslider: any;
  loading = false;
  lotteryrule: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    public api: EventsapiService,
  ) {
    this.lotteryrule = this.formBuilder.group({
      eventId: new FormControl('0', Validators.required),
      couponId: new FormControl('0',Validators.required),
      rule1: new FormControl('All',Validators.required),
      rule2: new FormControl('0',Validators.required),
      rule3: new FormControl('0',Validators.required),
    });
   }

  ngOnInit() {
    this.loading = true;
    this.api._getAPI('event/list').subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          this.eventList = res.data;
        },
        err => {
          if(err.length >0){
            //alert('HTTP Error'+ err)
          }
        }
    );

    this.api._getAPI('coupon').subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          this.couponList = res.data;
        },
        err => {
          if(err.length >0){
            // alert('HTTP Error'+ err)
          }
        }
    );
    this.api._getAPI('lottery').subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          this.lotteryruleData = res.data;
          // console.log('Lottery Rule :', JSON.stringify(this.lotteryruleData));
        },
        err => {
          if(err.length >0){
            // alert('HTTP Error'+ err)
          }
        }
    );
    this.loading = false;

  }

  generateRule(){
    this.loading = true;
    if(this.lotteryrule.valid){
      // console.log('lotteryrule :', this.lotteryrule.value);
      let params = {
        "eventId": this.lotteryrule.value.eventId,
        "couponId" : this.lotteryrule.value.couponId,
        "rule1" : this.lotteryrule.value.rule1,
        "rule2" : this.lotteryrule.value.rule2,
        "rule3": this.lotteryrule.value.rule3
      };

      // console.log('params :', JSON.stringify(params));
      this.api._postAPI('lottery',params).subscribe(
          res  => {
            // alert('Lottery Rule Response :'+ JSON.stringify(res));
          },
          err => {
            if(err.length >0){
              // alert('HTTP Error'+ err)
            }
          }
      );
    }else{
      // alert('All options are mandatory');
    } 
    this.loading = false;
  }



  generateLottery(LotteryId:any){
    this.loading = true;
    let params = {
      "lotteryId": LotteryId
    };


    console.log('params :', JSON.stringify(params));
    this.api._postAPI('lottery/generate',params).pipe(
      catchError(err => {
          // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
        res  => {
          alert('Alert'+ JSON.stringify(res.message));
          let winnerlist =[{
            "Rank":1,
            "WinnerName":"Kundan Sakpal"
          },
          {
            "Rank":2,
            "WinnerName":"Rohit Patil"
          },
          {
            "Rank":3,
            "WinnerName":"Sanket Shinde"
          }];
          const dialogRef = this.matDialog.open(LotteryWinnerDialog, {
            data: winnerlist,
            width: '400px',
            hasBackdrop: true,
            autoFocus : false
          });
        
        
          dialogRef.afterClosed().subscribe(result => {
            this.value = result;
          });
        },
        err => {
          if(err.length >0){
            // alert('HTTP Error'+ err)
          }
        }
    );
    this.loading = false;

  }
}



@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './lotterywinner.html',
})
export class LotteryWinnerDialog {
  public number: number = 3000;
  public observable: Observable<boolean>;
  private observer: Observer<boolean>;
  constructor(
    public dialogRef: MatDialogRef<LotteryWinnerDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log('data', JSON.stringify(data));
     
  }

  public trigger() {
    this.observer.next(true);
  }

  close() {
    this.dialogRef.close();
  }
}

