import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.route.navigateByUrl('main');
  }

}
