import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateventComponent, EventDialog } from './pages/createvent/createvent.component';
import { MainComponent } from './pages/main/main.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VieweventsComponent } from './pages/viewevents/viewevents.component';
import { ViewusersComponent } from './pages/viewusers/viewusers.component';
import { ApplicationadminComponent } from './pages/applicationadmin/applicationadmin.component';
import { CouponcreateComponent } from './pages/couponcreate/couponcreate.component';
import { LotteryOneComponent } from './pages/lottery-one/lottery-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDialogModule } from '@angular/material/dialog';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LotteryrulesComponent, LotteryWinnerDialog } from './pages/lotteryrules/lotteryrules.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { LotteryhistoryComponent } from './pages/lotteryhistory/lotteryhistory.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { Ng2OdometerModule } from 'ng2-odometer'; 
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';


import { MatDialogModule,
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatRippleModule,
  MatExpansionModule,
  MatChipsModule,
  MatBadgeModule,
  MatListModule, 
  MatToolbarModule, 
  MatSliderModule,
  MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserAuthComponent,
    DashboardComponent,
    CreateventComponent,
    MainComponent,
    PagenotfoundComponent,
    VieweventsComponent,
    ViewusersComponent,
    ApplicationadminComponent,
    CouponcreateComponent,
    LotteryOneComponent,
    EventDialog,
    LotteryWinnerDialog,
    LotteryrulesComponent,
    LotteryhistoryComponent,
    ResetpasswordComponent,
    
  ],

  entryComponents: [
    EventDialog,LotteryWinnerDialog
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    QRCodeModule,
    HttpClientModule,
    // FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    GooglePlaceModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatRippleModule,
    MatExpansionModule,
    MatChipsModule,
    MatBadgeModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    Ng2OdometerModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: 'blue', 
      secondaryColour: 'yellow', 
      tertiaryColour: 'red'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
