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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { VieweventsComponent } from './pages/viewevents/viewevents.component';
import { ViewusersComponent } from './pages/viewusers/viewusers.component';
import { ApplicationadminComponent } from './pages/applicationadmin/applicationadmin.component';
import { CouponcreateComponent } from './pages/couponcreate/couponcreate.component';
import { LotteryOneComponent } from './pages/lottery-one/lottery-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

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
    EventDialog
  ],

  entryComponents: [
    EventDialog
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    QRCodeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
