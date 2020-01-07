import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare var $: any;
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { environment } from 'src/environments/environment';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';


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

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})


export class CreateventComponent implements OnInit {
  qrcodename: string = environment.website;
  angForm: FormGroup;
  title = 'generate-qrcode';
  elementType: 'img';
  value: string;
  display = false;
  public myAngularxQrCode: string = this.qrcodename;
  public qrdata: string = null;
  createeventForm: FormGroup;
  submitted = false;

  categories: any;
  @ViewChild("placesRef",{ static : true }) placesRef : GooglePlaceDirective;
  location: any;
  registerForm: FormGroup;

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
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    public api: EventsapiService
  ) {
     this.myAngularxQrCode = this.qrcodename;
  }

  ngOnInit() {
    this.initiallize();
    $("#content").hide();
    $('[data-toggle="tooltip"]').tooltip();
  }

  handleAddressChange(address: Address) {
    this.location ={
      "lat": address.geometry.location.lat , "lon":address.geometry.location.lng
    }
  }

  initiallize(){
    this.loading = true;
    this.createeventForm = this.formBuilder.group({
      Name: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
      startdate : new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]}),
      endate : new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]}),
      contactpname : new FormControl('',Validators.required),
      contactpnumber : new FormControl('', Validators.required),
      duration: new FormControl('',Validators.required),
      category: new FormControl('0',Validators.required),
      address: new FormControl('',Validators.required),
      admittance: new FormControl('',Validators.required),
      userlimit: new FormControl('',Validators.required),
      feesoption : new FormControl('',Validators.required),
      admittype : new FormControl('',Validators.required)
    });
    this.api._getAPI('master/category/list').subscribe(
        res  => {
          this.categories = res.data;
        },
        err => {
          if(err.length >0){
            this.api._commonalertmsg(err);
          }
        }
    );
    this.loading = false;
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.createeventForm.controls; 
  }

  CreateEvent(){
    this.loading = true;
    this.submitted = true;
    if(this.createeventForm.valid){
      let params =  {
        "title": this.createeventForm.value.Name,
        "eventDescription": this.createeventForm.value.description,
        "startDate": this.createeventForm.value.startdate,
        "endDate": this.createeventForm.value.endate,
        "contactPersonName": this.createeventForm.value.contactpname,
        "contactPerson": ""+this.createeventForm.value.contactpnumber+"",
        "duration": this.createeventForm.value.duration,
        "eventCategoryId": this.createeventForm.value.category,
        "address": this.createeventForm.value.address,
        "latitude": "0",
        "longitude": "0",
        "maxSeat": this.createeventForm.value.admittance,
        "minSeat": this.createeventForm.value.userlimit,
        "isPaid": false, 
        "isSeatsVisible": false,
        "perSeatCharge": 0
      };

      
      this.api._postAPI('event/add',params).subscribe(
          res  => {
            this.loading = false;
            this.reset();
            if(res.status == 200){
              if (this.qrcodename == '') {
                this.display = false;
              } else {
                this.value = this.qrcodename + res.data.objectId + '/'+ res.data.title;
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
                  location.reload();
                });
              }
            }
            else{
              this.api._commonalertmsg(res.message);
            }
          },
          err => {
            if(err.length >0){
              this.api._commonalertmsg(err);
            }
          }
      );
    }else{
      this.api._commonalertmsg('All Fields are mandatory');
      this.loading = false;
    }
  }

  reset(){
    this.initiallize();
  }
}


// Mat Dialog Componet
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './eventdialog.html',
})
export class EventDialog {
  value: any;
  elementType: 'img';

  display: boolean;
  constructor(
    public dialogRef: MatDialogRef<EventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.display = true;
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



