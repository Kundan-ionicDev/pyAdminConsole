import { Component, OnInit } from '@angular/core';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare var $: any;
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
    private formBuilder: FormBuilder,
    public api: EventsapiService
  ) {
    this.myAngularxQrCode = this.qrcodename;
  }

  ngOnInit() {
    $("#content").hide();
    this.createeventForm = this.formBuilder.group({
      Name: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
      duration: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      admittance: new FormControl('',Validators.required),
      userlimit: new FormControl('',Validators.required),
      option : new FormControl('',Validators.required),
      admittype : new FormControl('',Validators.required),
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.createeventForm.controls; }

  generateQR(){
    this.submitted = true;
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
          },
          err => {
            if(err.length >0){
              //alert('HTTP Error'+ err)
            }
          }
      );
    }else{
      alert('Please fill details...');
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
    "width=1000,height=900,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
    WindowObject.document.writeln(html);
    WindowObject.document.close();
    WindowObject.focus();
    WindowObject.print();
    WindowObject.close();
    document.getElementById('print_link').style.display='block';
  }
}
