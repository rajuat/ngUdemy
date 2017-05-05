import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from "app/routing/servers/servers.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverId;
  constructor(
    private serversService: ServersService,
    private activateRoute: ActivatedRoute,
    private router: Router
    //private paramsSubscription: Subscription
  ) { }

  ngOnInit() {
    this.serverId = +this.activateRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(this.serverId);

    this.activateRoute.params.subscribe(
      (params: Params) => {
        this.serverId = +params['id'];
        this.server = this.serversService.getServer(this.serverId);
      }
    );

  }

  onEdit() {
    console.log('onEdit');
    this.router.navigate(['edit'], { relativeTo: this.activateRoute, queryParamsHandling: 'preserve' });
  }

}
