import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, Observer } from 'rxjs';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';

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
  lotteryrule: FormGroup;

  @ViewChild('ngxLoading', { static: false }) ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public config = { animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };

  
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
          this.eventList = res.data;
        },
        err => {
          if(err.length >0){
            //alert('HTTP Error'+ err)
            this.api._commonalertmsg(err);
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
            this.api._commonalertmsg(err);
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
            this.api._commonalertmsg(err);
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
            this.api._commonalertmsg(res.message);
          },
          err => {
            if(err.length >0){
              this.api._commonalertmsg(err);
            }
          }
      );
    }else{
      // alert('All options are mandatory');
      this.api._commonalertmsg('All options are mandatory');
    } 
    this.loading = false;
  }



  generateLottery(LotteryId:any){
    this.loading = true;
    let params = {
      "lotteryId": LotteryId
    };

    // console.log('params :', JSON.stringify(params));
    this.api._postAPI('lottery/generate',params).subscribe(
        res  => {
          alert('Alert'+ JSON.stringify(res));
          this.api._commonalertmsg(res.message);
          this.api._getAPI('lottery/history?uuid='+res.data.uuid).subscribe(
            res  => {
              // alert('Lottery Winners :'+ JSON.stringify(res.data));
              var winnerdata = res.data;
              const dialogRef = this.matDialog.open(LotteryWinnerDialog, {
                data: winnerdata,
                width: '700px',
                hasBackdrop: false,
                autoFocus : false
              });
            
            
              dialogRef.afterClosed().subscribe(result => {
                this.value = result;
              });
            },
            err => {
              if(err.length >0){
                this.api._commonalertmsg(err);
                }
              }
          );
          
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

  printPdf() {
    var DocumentContainer = document.getElementById('content');
    var html = '<html><head>'+
               '<link href="css/template.css" rel="stylesheet" type="text/css" />'+
               '</head><body style="background:#ffffff;">'+
               DocumentContainer.innerHTML+
               '</body></html>';

    var WindowObject = window.open("", "PrintWindow",
    "width=auto,height=auto,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes, _blank");
    WindowObject.document.writeln(DocumentContainer.innerHTML);
    WindowObject.document.close();
    WindowObject.focus();
    WindowObject.print();
    WindowObject.close();
    document.getElementById('print_link').style.display='block';
  }
}

