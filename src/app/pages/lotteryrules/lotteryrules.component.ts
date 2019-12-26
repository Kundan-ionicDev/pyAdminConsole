import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { EventsapiService } from 'src/app/services/eventsapi.service';

@Component({
  selector: 'app-lotteryrules',
  templateUrl: './lotteryrules.component.html',
  styleUrls: ['./lotteryrules.component.css']
})
export class LotteryrulesComponent implements OnInit {
  eventList: any;

  constructor(
    public api: EventsapiService,
  ) { }

  ngOnInit() {
    this.api._getAPI('event/list').pipe(
      catchError(err => {
          // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          this.eventList = res.data;
        },
        err => {
          if(err.length >0){
            //alert('HTTP Error'+ err)
          }
        }
    );
  }

  

}
