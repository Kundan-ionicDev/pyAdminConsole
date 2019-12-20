import { Component, OnInit } from '@angular/core';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { EventDialog } from '../createvent/createvent.component';
import { MatDialog } from '@angular/material/dialog';
declare var $: any;

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css']
})
export class VieweventsComponent implements OnInit {
  qrcodename: string = "http://pyticketingsystem.com/events/";
  title = 'generate-qrcode';
  elementType: 'img';
  value: string;
  display = false;
  eventList: any;

  constructor(
    private matDialog: MatDialog,
    public api: EventsapiService,
  ) { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();   
    this.initialize();
  }


  initialize(){
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

  previewEvent(event:any){
    this.value = this.qrcodename + "asdadadasd" + '/'+ "arjit";
    //alert('res.data.objectId' + res.data.objectId);
    this.display = true;
    const dialogRef = this.matDialog.open(EventDialog, {
      data: 
      {
        "title": event.title,
        "eventDescription": event.eventDescription,
        "startDate": event.startDate,
        "endDate": event.endDate,
        "contactPersonName": event.contactPersonName,
        "contactPerson": event.contactPerson,
        "duration": event.duration,
        "eventCategoryId": event.category,
        "address": event.address,
        "maxSeat": event.maxSeat,
        "minSeat": event.minSeat,
        "isPaid": 'Free', 
        "isSeatsVisible": false,
        "perSeatCharge": 0,
        "QrValue": this.value
      },
      width: '800px',
      hasBackdrop: true,
      autoFocus : false
    });
    
    
    dialogRef.afterClosed().subscribe(result => {
      this.value = result;
    });
  }

}
