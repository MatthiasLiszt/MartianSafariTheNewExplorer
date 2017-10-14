import { Component, ViewChild } from '@angular/core';
import {Controlpanel} from './controlpanel.component';
import {Monitor} from './monitor.component';

@Component({
  selector: 'app-root',
  template: `<div id="mainline">
             <button (click)="onStartbutton()">Start</button>
             <button>Reset</button><button>Background</button> 
             </div>
             <h3>{{where}}&nbsp;{{wheremessage}}</h3>
             <div id="monitor"><monitor></monitor> </div>
             <controlpanel id="controlpanel"></controlpanel>
             <p>modified {{title}}</p>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First Angular App';
  where=0;
  wheremessage=' ';
  
  @ViewChild(Controlpanel) control: Controlpanel;
  @ViewChild(Monitor) monitor: Monitor;

  onStartbutton(): void{
   //alert("start button clicked");
   this.control.startIt();
   setInterval( () => { var g=this.control.getValues();
                        this.where=g.height;
                        this.monitor.renderShip(g.height,g.velocity,g.fuel);
                        if(g.height>15000){this.wheremessage='you reached outer space';}
                        if(g.height<15000){this.wheremessage=' ';}
                        if(g.height==0){this.wheremessage='somehow on the ground';}  
                      } , 200);
  }
}
