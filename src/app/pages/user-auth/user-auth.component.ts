import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  userAuth: FormGroup;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public route: Router
  ) { }

  ngOnInit() {
    this.userAuth = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.userAuth.controls; }

  login(){
    this.submitted = true;
    if(this.userAuth.valid){
      this.route.navigateByUrl('main');
    }else{
      // alert('Please provide valid credentials...');
    }
    
  }

}
