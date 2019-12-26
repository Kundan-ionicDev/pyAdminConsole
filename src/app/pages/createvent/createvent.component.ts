import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare var $: any;
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
// import { Address } from 'cluster';



export const DateTimeValidator = (fc: FormControl) => {
  const date = new Date(fc.value);
  const isValid = !isNaN(date.valueOf());
  return isValid ? null : {
      isValid: {
          valid: false
      }
  };
};

export class NgxQrCode {
  text: string;
}

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})

export class CreateventComponent implements OnInit {
  qrcodename: string = "http://pyticketingsystem.com/events/";
  title = 'generate-qrcode';
  elementType: 'img';
  value: string;
  display = false;
  public myAngularxQrCode: string = this.qrcodename;
  public qrdata: string = null;
  createeventForm: FormGroup;
  submitted: boolean;
  categories: any;
  @ViewChild("placesRef",{ static : true }) placesRef : GooglePlaceDirective;
  
  constructor(
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    public api: EventsapiService
  ) {
    this.initiallize();
    this.myAngularxQrCode = this.qrcodename;
  }

  ngOnInit() {
    $("#content").hide();
    $('[data-toggle="tooltip"]').tooltip();   
    this.createeventForm = this.formBuilder.group({
      Name: new FormControl('COA', Validators.required),
      description: new FormControl('Center Stage Award',Validators.required),
      startdate : new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]}),
      endate : new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]}),
      contactpname : new FormControl('Kundan Sakpal',Validators.required),
      contactpnumber : new FormControl('9960097184',Validators.required),
      duration: new FormControl('2',Validators.required),
      category: new FormControl('1',Validators.required),
      address: new FormControl('',Validators.required),
      admittance: new FormControl('200',Validators.required),
      userlimit: new FormControl('2',Validators.required),
      feesoption : new FormControl('free',Validators.required),
      admittype : new FormControl('',Validators.required)
    });
    
  }

  handleAddressChange(address: Address) {
    alert('address' + JSON.stringify(address));
  }

  initiallize(){
    // alert('initialize');
    this.api._getAPI('master/category/list').pipe(
      catchError(err => {
          // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          this.categories = res.data;
        },
        err => {
          if(err.length >0){
            // alert('HTTP Error'+ err)
          }
        }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.createeventForm.controls; }

  generateQR(){
   // console.log('FormValue' , JSON.stringify(this.createeventForm.value));
    
    if(this.createeventForm.valid){
     // console.log('form::', this.createeventForm);
      let params =  {
        "title": this.createeventForm.value.Name,
        "eventDescription": this.createeventForm.value.description,
        "startDate": this.createeventForm.value.startdate,
        "endDate": this.createeventForm.value.endate,
        "contactPersonName": this.createeventForm.value.contactpname,
        "contactPerson": this.createeventForm.value.contactpnumber,
        "duration": this.createeventForm.value.duration,
        "eventCategoryId": this.createeventForm.value.category,
        "address": this.createeventForm.value.address,
        "latitude": "34.23234242",
        "longitude": "34.23234242",
        "maxSeat": this.createeventForm.value.admittance,
        "minSeat": this.createeventForm.value.userlimit,
        "isPaid": false, //this.createeventForm.value.feesoption,
        // "AdmittanceType": this.createeventForm.value.admittype,
        "isSeatsVisible": false,
        "perSeatCharge": 0,
        // "eventTypeId": 1,
        // "cityId": 1,
        // "stateId": 1,
        // "countryId": 1,
        // "salesStartDate": this.createeventForm.value.startdate,
        // "salesEndDate" : this.createeventForm.value.endate
      };

      //console.log('form::', this.createeventForm);
      this.api._postAPI('event/add',params).pipe(
        catchError(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return throwError(err);
        })
      )
      .subscribe(
          res  => {
            //alert('HTTP response'+ JSON.stringify(res))
            //  $("#content").show();
            if (this.qrcodename == '') {
              this.display = false;
              // alert("Please enter the name");
              return;
            } else {
              this.value = this.qrcodename + res.data.objectId + '/'+ res.data.title;
              //alert('res.data.objectId' + res.data.objectId);
              this.display = true;
              const dialogRef = this.matDialog.open(EventDialog, {
                data: 
                {
                  "title": res.data.title,
                  "eventDescription": res.data.eventDescription,
                  "startDate": res.data.startDate,
                  "endDate": res.data.endDate,
                  "contactPersonName": res.data.contactPersonName,
                  "contactPerson": res.data.contactPerson,
                  "duration": res.data.duration,
                  "eventCategoryId": res.data.category,
                  "address": res.data.address,
                  "maxSeat": res.data.maxSeat,
                  "minSeat": res.data.minSeat,
                  "isPaid": 'Free', 
                  "isSeatsVisible": false,
                  "perSeatCharge": 0,
                  "QrValue": this.value
                },
                width: '800px',
                hasBackdrop: true,
                autoFocus : false
              });
             
             
              dialogRef.afterClosed().subscribe(result => {
                this.value = result;
              });

              this.createeventForm.reset();
            }
          },
          err => {
            if(err.length >0){
              //alert('HTTP Error'+ err)
            }
          }
      );
    }else{
      // alert('Please fill details...');
    }
  }

  
//   makePdf() {
//     var DocumentContainer = document.getElementById('content');
//     var html = '<html><head>'+
//                '<link href="css/template.css" rel="stylesheet" type="text/css" />'+
//                '</head><body style="background:#ffffff;">'+
//                DocumentContainer.innerHTML+
//                '</body></html>';

//     var WindowObject = window.open("", "PrintWindow",
//     "width=auto,height=auto,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes, _blank");
//     WindowObject.document.writeln(DocumentContainer.innerHTML);
//     WindowObject.document.close();
//     WindowObject.focus();
//     WindowObject.print();
//     WindowObject.close();
    
//     document.getElementById('print_link').style.display='block';
//   }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './eventdialog.html',
})
export class EventDialog {
  value: any;
  elementType: 'img';

  display: boolean;
  qrcodename: string = "http://pyticketingsystem.com/events/id=";
  constructor(
    public dialogRef: MatDialogRef<EventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.value = this.qrcodename;
      this.display = true;
      console.log('Data' , data);      
    }


    
  onNoClick(): void {
    this.dialogRef.close();
  }

  makePdf() {
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



