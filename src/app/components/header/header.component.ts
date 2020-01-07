import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsapiService } from 'src/app/services/eventsapi.service';
// import * as $ from 'jquery';
declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
 
  constructor(
    public route: Router,
    public api: EventsapiService
  ) { }

  ngOnInit() {
    $('#side-menu').metisMenu();
    // localStorage.removeItem('token');
    this.userName = localStorage.getItem("UserName");
    var token = localStorage.getItem("token");
    if(token == null || token == undefined){
      alert('Token Expired. Please login again');
      this.route.navigateByUrl('userAuth');
    }
  }

}
