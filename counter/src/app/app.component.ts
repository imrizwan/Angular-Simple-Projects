import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Counter App';
  count:number = 0;


  increment(){
    this.count += 1;
  }

  decrement(){
    this.count -= 1;
  }
}
