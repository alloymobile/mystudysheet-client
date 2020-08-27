import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mystudysheet';
  public clickedEvent: String;

  childEventClicked(event: String) {
    this.clickedEvent = event;
  }
}
