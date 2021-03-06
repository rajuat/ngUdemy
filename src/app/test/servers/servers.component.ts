import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-servers',
  //selector: '[app-basic-servers]',
  //selector: '.app-basic-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name was " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
  }

}
