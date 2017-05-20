import { Component, OnInit } from '@angular/core';
import { ServerService } from "app/http/server.service";
import { Response } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  appName = this.serverService.getName();

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onGet(){
    this.serverService.getServers()
      .subscribe((servers: any[]) => {
         this.servers = servers;        
        },
        (error) => {
          console.log(error);
        });
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe((response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
