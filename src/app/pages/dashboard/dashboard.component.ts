import { Component, OnInit } from '@angular/core';
import { EventsapiService } from 'src/app/services/eventsapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = false;
  constructor(
    public api: EventsapiService
  ) { }

  ngOnInit() {
    this.loading = false;
  }

}
