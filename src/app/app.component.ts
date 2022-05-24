import { Component,ElementRef,HostBinding,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name='undertaker';
   fun() {

    alert('this is called event binding');

    
  }
  
  // host binding method used to bind properties for host or component
  @HostBinding ('style.color') color='blue';
  // we can set the variable for this binding,so we can change dynamically

  // @host listner used to how to handle user events


  
}
