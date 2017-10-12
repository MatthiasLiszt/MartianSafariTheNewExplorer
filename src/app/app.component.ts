import { Component, ViewChild } from '@angular/core';
import {Controlpanel} from './controlpanel.component';
import {Monitor} from './monitor.component';

@Component({
  selector: 'app-root',
  template: `<div id="mainline">
             <button (click)="onStartbutton()">Start</button>
             <button>Reset</button><button>Background</button> 
             </div>
             <h3>{{where}}</h3>
             <div id="monitor"><monitor></monitor> </div>
             <controlpanel id="controlpanel"></controlpanel>
             <p>modified {{title}}</p>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First Angular App';
  where=0;
  
  @ViewChild(Controlpanel) control: Controlpanel;
  @ViewChild(Monitor) monitor: Monitor;

  onStartbutton(): void{
   //alert("start button clicked");
   this.control.startIt();
   setInterval( () => { var x=this.control.getValues();
                        this.where=x;
                        this.monitor.renderShip(x);
                      } , 200);
  }
}
