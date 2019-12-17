import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder,
  ) {
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
}
