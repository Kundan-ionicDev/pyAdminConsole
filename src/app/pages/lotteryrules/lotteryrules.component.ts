import { Component, OnInit, Inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, Observer } from 'rxjs';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-lotteryrules',
  templateUrl: './lotteryrules.component.html',
  styleUrls: ['./lotteryrules.component.css']
})
export class LotteryrulesComponent implements OnInit {
  eventList: any;
  value: any;
  couponList: any;
  lotteryrule: any;
  matslider: any;

  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    public api: EventsapiService,
  ) {
    this.lotteryrule = this.formBuilder.group({
      eventId: new FormControl('0', Validators.required),
      couponId: new FormControl('0',Validators.required),
      rule1: new FormControl('ALL',Validators.required),
      rule2: new FormControl('0',Validators.required),
      rule3: new FormControl('0',Validators.required),
    });
   }

  ngOnInit() {
    this.api._getAPI('event/list').pipe(
      catchError(err => {
          // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
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

    this.api._getAPI('coupon').pipe(
      catchError(err => {
          // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
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
  }

  generateRule(){
    if(this.lotteryrule.valid){
      console.log('lotteryrule :', this.lotteryrule.value);
    }else{
      alert('All options are mandatory');
    }
  }

  generateLottery(){
    let winnerlist =[
      {
        "WinnerName":"Kundan Sakpal",
        "WinnerMobile":"996006783",
        "CouponCode":"SPECIAL100",
        "Rank":"1"
      },
      {
        "WinnerName":"Rohit Patil",
        "WinnerMobile":"21311311",
        "CouponCode":"SPECIAL100",
        "Rank":"2"
      },
      {
        "WinnerName":"Sanket Shinde",
        "WinnerMobile":"9876578892",
        "CouponCode":"SPECIAL100",
        "Rank":"3"
      }
    ];
    

    const dialogRef = this.matDialog.open(LotteryWinnerDialog, {
      data: winnerlist,
      width: '400px',
      hasBackdrop: true,
      autoFocus : false
    });
   
   
    dialogRef.afterClosed().subscribe(result => {
      this.value = result;
    });
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

