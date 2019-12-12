import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateventComponent } from './pages/createvent/createvent.component';
import { MainComponent } from './pages/main/main.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { VieweventsComponent } from './pages/viewevents/viewevents.component';
import { ViewusersComponent } from './pages/viewusers/viewusers.component';


const routes: Routes = [
  { path: '', redirectTo: 'userAuth', pathMatch: 'full' },
  { path: 'userAuth', component: UserAuthComponent },
  { path: 'main', component: MainComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    { path: 'createevent', component: CreateventComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'pagenotfound', component: PagenotfoundComponent },
    { path: 'viewevents', component: VieweventsComponent },
    { path: 'viewusers', component: ViewusersComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
