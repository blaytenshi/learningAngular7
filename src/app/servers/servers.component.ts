import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // either templateUrl or template property must be present
  templateUrl: './servers.component.html',
  // Can either use template property to specify inline template
  // code. Here, commented out is some inline code to render the
  // app-server (not app-servers) component.
  // You can even wrap the inline code with backticks if you
  // need to multiline the code.
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
