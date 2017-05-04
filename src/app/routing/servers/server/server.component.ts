import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from "app/routing/servers/servers.service";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const serverId = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(serverId);
  }

}
