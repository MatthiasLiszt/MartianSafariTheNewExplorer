import { Component, ViewChild } from '@angular/core';
import {Controlpanel} from './controlpanel.component';

@Component({
  selector: 'app-root',
  template: `<div id="mainline">
             <button (click)="onStartbutton()">Start</button>
             <button>Reset</button><button>Background</button> 
             </div>
             
             <div id='monitor'>
             </div> 
             <controlpanel id="controlpanel"></controlpanel>
             <p>modified {{title}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  
  @ViewChild(Controlpanel) control: Controlpanel;

  onStartbutton(): void{
   //alert("start button clicked");
   this.control.startIt();
  }
}
