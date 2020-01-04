import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare var $: any;

export const DateTimeValidator = (fc: FormControl) => {
  const date = new Date(fc.value);
  const isValid = !isNaN(date.valueOf());
  return isValid ? null : {
      isValid: {
          valid: false
      }
  };
};

@Component({
  selector: 'app-couponcreate',
  templateUrl: './couponcreate.component.html',
  styleUrls: ['./couponcreate.component.css']
})
export class CouponcreateComponent implements OnInit {
  showHide : boolean = false;
  buttontext:string = "Add";
  couponForm: any;
  display = false;
  submitted: boolean;
  eventList: any;
  categories: any;
  couponList: any;

  constructor(
    public api: EventsapiService,
    private formBuilder: FormBuilder
  ) {
    this.initialize();
    this.couponForm = this.formBuilder.group({
      couponcode: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
      eventId: new FormControl('',Validators.required),
      expiredt: new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]}),
    });

   }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();   
  }

  // convenience getter for easy access to form fields
  get f() { return this.couponForm.controls; }

  add(){
    this.initialize();
    if(this.showHide == false){
      this.buttontext = "Show Coupon list";
      this.showHide = true;
    }else{
      this.showHide = false;
      this.buttontext = "Add";
    }
  }

  createCoupon(){
    let params ={
      "title": this.couponForm.value.couponcode,
      "code": this.couponForm.value.couponcode,
      "eventId": this.couponForm.value.eventId,
      "description": this.couponForm.value.description,
      "startDate": new Date(),
      "endDate":  this.couponForm.value.expiredt,
      "type": "type1",
      "amount": 1
    };
   
    console.log('params' , params );

    this.api._postAPI('coupon',params).pipe(
      catchError(err => {
          // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          if(res.status ==200){
            alert(res.message);
          }else{
            alert(res.message);
          }
        },
        err => {
          if(err.length >0){
            //alert('HTTP Error'+ err)
          }
        }
    );
  }

  

  initialize(){
    
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
            //alert('HTTP Error'+ err)
          }
        }
    );




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
