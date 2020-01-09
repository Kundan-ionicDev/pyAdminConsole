import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  userAuth: FormGroup;
  submitted: boolean;
  passwordchnge: boolean = false;
  

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
    public api: EventsapiService,
    private formBuilder: FormBuilder,
    public route: Router,
  ) { }

  ngOnInit() {
    localStorage.removeItem('token');
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
    this.loading = true;
    // this.route.navigateByUrl('main');
    if(this.userAuth.valid){
      // this.route.navigateByUrl('main');
      let params = {
        "email": this.userAuth.value.email,
        "password": this.userAuth.value.password
      };
  
      this.api._postAPI('auth/login',params).subscribe(
          res  => {
            if(res.status == 200){
              this.route.navigateByUrl('main');
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("UserName", res.data.name);
            }else{
              this.api._commonErrormsg('Encountered an error!','Something went wrong, please try again');
            }
          },
          err => {
            if(err.length >0){
              //alert('HTTP Error'+ err)
              this.api._commonalertmsg(err);
            }
          }
      );
    }else{
      // alert('Please provide valid credentials...');
      this.api._commonalertmsg('Please provide valid credentials.');
    }
    this.loading = true;
       setTimeout(()=>{    //<<<---    using ()=> synta
        this.loading = false;
    }, 5000);
    
  }

  showHide(){
    if(this.passwordchnge == false){
      this.passwordchnge = true;
    }else{
      this.passwordchnge = false;
    }
  }

  resetpassword(){
     this.passwordchnge = false;

   }

}
