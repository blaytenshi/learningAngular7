import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // this selector can be used like a css selector.
  // here we are using it to select elements with the app-servers
  // attribute. The next one we are selecting it by class.
  // You can't select by id though! Nor do pseudo selectors (hover)
  // selector: '[app-servers]', // attribute selector
  // selector: '.app-servers', // class selector
  // In the cases, we mostly use elements as our default selector type

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

  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    // change the allowNewServer button to clickable 2 seconds
    // after the component is created
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  // when the onUpdateServerName is called with the event, we want to
  // set the serverName each time. Note this isn't strictly two-way
  // binding yet!
  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  ngOnInit() {
  }

}
