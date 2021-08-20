import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  isC1 = false

  date = new Date();
  myStyle = false;

  onMouseOver() {
    this.isC1 = !this.isC1;
  }
}
