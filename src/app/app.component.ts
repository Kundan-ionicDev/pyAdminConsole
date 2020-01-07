import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgxLoadingComponent, ngxLoadingAnimationTypes } from 'ngx-loading';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PyTicketAdminConsole';
  
  @ViewChild('ngxLoading', { static: false }) ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
   public loading = false;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public config = { animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
  
  constructor() { 
   
  }

  // initialize(){
  //   setTimeout(()=>{    //<<<---    using ()=> synta
  //       this.loading = false;
  // }, 5000);
  // }

  // public toggleColours(): void {
  //   this.coloursEnabled = !this.coloursEnabled;

  //   if (this.coloursEnabled) {
  //     this.primaryColour = PrimaryRed;
  //     this.secondaryColour = SecondaryBlue;
  //   } else {
  //     this.primaryColour = PrimaryWhite;
  //     this.secondaryColour = SecondaryGrey;
  //   }
  // }

  // toggleTemplate(): void {
  //   if (this.loadingTemplate) {
  //     this.loadingTemplate = null;
  //   } else {
  //     this.loadingTemplate = this.customLoadingTemplate;
  //   }
  // }

  // public showAlert(): void {
  //   alert('ngx-loading rocks!');
  // }
}

