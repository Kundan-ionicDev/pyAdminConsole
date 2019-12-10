import { Component, OnInit } from '@angular/core';
import { EventsapiService } from 'src/app/services/eventsapi.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare var $: any;

export class NgxQrCode {
  text: string;
}

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})
export class CreateventComponent implements OnInit {
  qrcodename: string = "http://pyticketingsystem.com/events/id=";
  title = 'generate-qrcode';
  elementType: 'img';
  value: string;
  display = false;
  public myAngularxQrCode: string = this.qrcodename;
  public qrdata: string = null;

  constructor(
    public api: EventsapiService
  ) {
    this.myAngularxQrCode = this.qrcodename;
  }

  ngOnInit() {
    $("#content").hide();
  }

  generateQR(){
    let params = {
      "Name":"A Musical Extravaganza - A Tribute Concert to Celia Lobo","Description":"Celia Lobo Academy of Voice (CLAV), Furtados, Royal Opera House, Mumbai and Avid Learning present A Musical Extravaganza: A Tribute Concert To Celia Lobo, celebrating India’s only living Opera Diva –  Opera Singer, Vocal Coach & Mentor and Stage Director Celia Lobo.","Category":"Music","Duration":"2 Hours","Location":"The Royal Opera House, Mumbai","Address":"Mathew Rd, Opera House, Girgaon, Mumbai, Maharashtra 400004","ContactDetails":"7586980868","MaxAdmittance":"500",
      "MaxUserLimit":"550","TicketIssuance":"Individual","FeeOptions":"Free","AdmittanceType":"Single"
    }

    this.api._postAPI('registerEvent',params).pipe(
      catchError(err => {
          alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
          return throwError(err);
      })
    )
    .subscribe(
        res  => {
          alert('HTTP response'+ JSON.stringify(res) + res._id)
          //  $("#content").show();
          if (this.qrcodename == '') {
            this.display = false;
            alert("Please enter the name");
            return;
          } else {
            this.value = this.qrcodename + res._id;
            this.display = true;
          }
        },
        err => {
          if(err.length >0){
            alert('HTTP Error'+ err)
          }
        },
        () => alert('HTTP request completed...')
    );
  }

  
  makePdf() {
    var DocumentContainer = document.getElementById('content');
    var html = '<html><head>'+
               '<link href="css/template.css" rel="stylesheet" type="text/css" />'+
               '</head><body style="background:#ffffff;">'+
               DocumentContainer.innerHTML+
               '</body></html>';

    var WindowObject = window.open("", "PrintWindow",
    "width=1000,height=900,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
    WindowObject.document.writeln(html);
    WindowObject.document.close();
    WindowObject.focus();
    WindowObject.print();
    WindowObject.close();
    document.getElementById('print_link').style.display='block';
  }
}
