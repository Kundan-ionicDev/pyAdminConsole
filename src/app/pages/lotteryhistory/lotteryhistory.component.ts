import { Component, OnInit } from '@angular/core';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-lotteryhistory',
  templateUrl: './lotteryhistory.component.html',
  styleUrls: ['./lotteryhistory.component.css']
})
export class LotteryhistoryComponent implements OnInit {

  eventusers: any;
  categories: any;

  constructor(
    public api: EventsapiService,
  ) { }

  ngOnInit() {
    this.initialize();
  }


  initialize(){
    this.api._getAPI('event/booking').pipe(
      catchError(err => {
          // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          console.log('res :', JSON.stringify(res));
          this.eventusers = res.data;
        },
        err => {
          if(err.length >0){
            //alert('HTTP Error'+ err)
          }
        }
    );


     // alert('initialize');
     this.api._getAPI('master/category/list').pipe(
      catchError(err => {
          // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          this.categories = res.data;
        },
        err => {
          if(err.length >0){
            // alert('HTTP Error'+ err)
          }
        }
    );
  }

}
