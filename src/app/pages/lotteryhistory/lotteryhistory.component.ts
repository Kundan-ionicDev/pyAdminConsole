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
  lotteryhistory: any;
  eventlist: any;
  loading = false;
  constructor(
    public api: EventsapiService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.initialize();
    this.loading = false;
  }


  initialize(){
    this.loading = true;
    this.api._getAPI('event/list').subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          console.log('res :', JSON.stringify(res));
          this.eventlist = res.data;
        },
        err => {
          if(err.length >0){
            //alert('HTTP Error'+ err)
          }
        }
    );

    this.api._getAPI('lottery/history').subscribe(
        res  => {
          // alert('HTTP response'+ JSON.stringify(res));
          console.log('lottery/history :', JSON.stringify(res.data));
          this.lotteryhistory = res.data;

        },
        err => {
          if(err.length >0){
            //alert('HTTP Error'+ err)
          }
        }
    );
    this.loading = false;
  }

}
