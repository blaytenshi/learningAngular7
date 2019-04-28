import { Component } from '@angular/core';

@Component({
  // this is the selector that you use to 'render' the component
  // in the html template
  selector: 'app-root',
  templateUrl: './app.component.html',
  // it's an array because it could have many stylesheets to apply
  // but you could apply your own inline styles with styles property
  // styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
}
