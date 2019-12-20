import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare var $: any;
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

  constructor(
    public api: EventsapiService,
    private formBuilder: FormBuilder
  ) {
    this.initialize();
    this.couponForm = this.formBuilder.group({
      Name: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
      duration: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      admittance: new FormControl('',Validators.required),
      userlimit: new FormControl('',Validators.required),
      option : new FormControl('free',Validators.required),
      admittype : new FormControl('',Validators.required),
    });

   }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();   
  }

  // convenience getter for easy access to form fields
  get f() { return this.couponForm.controls; }

  add(){
    if(this.showHide == false){
      this.buttontext = "Show Coupon list";
      this.showHide = true;
    }else{
      this.showHide = false;
      this.buttontext = "Add";
    }
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
}
