import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  userAuth: FormGroup;
  submitted: boolean;

  constructor(
    public api: EventsapiService,
    private formBuilder: FormBuilder,
    public route: Router
  ) { }

  ngOnInit() {
    this.userAuth = this.formBuilder.group({
      email: new FormControl('admin1@gmail.com', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('password',[Validators.required, Validators.minLength(6)])
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.userAuth.controls; }

  login(){
    this.submitted = true;
    if(this.userAuth.valid){
      // this.route.navigateByUrl('main');
      let params = {
        "email": this.userAuth.value.email,
        "password": this.userAuth.value.password
      };
  
      this.api._postAPI('auth/login',params).pipe(
        catchError(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return throwError(err);
        })
      )
      .subscribe(
          res  => {
            // alert('HTTP response'+ JSON.stringify(res))
            // $("#content").show();
            if(res.status == 200){
              this.route.navigateByUrl('main');
              localStorage.setItem("UserName", res.data.name);
            }else{
              alert('Error!!!' + res.data);
            }
          },
          err => {
            if(err.length >0){
              //alert('HTTP Error'+ err)
            }
          }
      );
    }else{
      // alert('Please provide valid credentials...');
    }
    
  }

}
