import {Component} from '@angular/core';

@Component({
  // Name of the selector should be a unique string.
  selector: 'app-server',
  templateUrl: './server.component.html',

})
export class ServerComponent {
  serverId: number = 10; // typescript typecheck added for demo purposes
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
