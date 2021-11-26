import { Component, destroyPlatform } from '@angular/core';
import { bufferToggle } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  msg:any;
  constructor() {

   }

   clickEvent(){
    this.msg="https://placeimg.com/320/320/any";
    return this.msg;
  }
 
}
