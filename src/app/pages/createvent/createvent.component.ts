import { Component, OnInit, Inject } from '@angular/core';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare var $: any;
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export class NgxQrCode {
  text: string;
}

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})
export class CreateventComponent implements OnInit {
  qrcodename: string = "http://pyticketingsystem.com/events/id=";
  title = 'generate-qrcode';
  elementType: 'img';
  value: string;
  display = false;
  public myAngularxQrCode: string = this.qrcodename;
  public qrdata: string = null;
  createeventForm: FormGroup;
  submitted: boolean;

  constructor(
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    public api: EventsapiService
  ) {
    this.myAngularxQrCode = this.qrcodename;
  }

  ngOnInit() {
    $("#content").hide();
    $('[data-toggle="tooltip"]').tooltip();   
    this.createeventForm = this.formBuilder.group({
      Name: new FormControl('COA', Validators.required),
      description: new FormControl('Center Stage Award',Validators.required),
      duration: new FormControl('2 hours',Validators.required),
      category: new FormControl('Seminars',Validators.required),
      address: new FormControl('BKC bandra Mumbai 400061',Validators.required),
      admittance: new FormControl('200',Validators.required),
      userlimit: new FormControl('2',Validators.required),
      option : new FormControl('free',Validators.required),
      admittype : new FormControl('2',Validators.required),
      contactpnumber : new FormControl('9960097184',Validators.required),
      contactpname : new FormControl('Kundan Sakpal',Validators.required),
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.createeventForm.controls; }

  generateQR(){
    // const dialogConfig = new MatDialogConfig();
    // this.matDialog.open(EventDialog, dialogConfig);

    const dialogRef = this.matDialog.open(EventDialog, {
      // data: [{ "Name":"kundan"}],
      width: '800px',
      hasBackdrop: true,
      autoFocus : false
    });
   
   
    dialogRef.afterClosed().subscribe(result => {
      this.value = result;
      // alert('Updated Track Value::' + result + JSON.stringify(details));
      // this._updataTrackDetails(details);
    });

    
    if(this.createeventForm.valid){
      console.log('form::', this.createeventForm);
      let params = {
        "Name": this.createeventForm.value.Name,
        "Description": this.createeventForm.value.description,
        "Category": this.createeventForm.value.category,
        "Duration": this.createeventForm.value.duration,
        "Location": this.createeventForm.value.address,
        "Address":this.createeventForm.value.address,
        "ContactDetails":'Team India',
        "MaxAdmittance": this.createeventForm.value.admittance,
        "MaxUserLimit":this.createeventForm.value.userlimit,
        "TicketIssuance":"Individual",
        "FeeOptions": this.createeventForm.value.option,
        "AdmittanceType": this.createeventForm.value.admittype
      };
  
      this.api._postAPI('registerEvent',params).pipe(
        catchError(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return throwError(err);
        })
      )
      .subscribe(
          res  => {
            // alert('HTTP response'+ JSON.stringify(res) + res._id)
            //  $("#content").show();
            if (this.qrcodename == '') {
              this.display = false;
              // alert("Please enter the name");
              return;
            } else {
              this.value = this.qrcodename + res._id;
              this.display = true;
            }
            this.makePdf();
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

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './eventdialog.html',
})
export class EventDialog {
  value: any;
  display: boolean;
  qrcodename: string = "http://pyticketingsystem.com/events/id=";
  constructor(
    public dialogRef: MatDialogRef<EventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.value = this.qrcodename;
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



