import { ServerElementComponent } from './../server-element/server-element.component';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput', null) serverContentInput: ElementRef;


  @Output("sAdded") serverAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output("bpAdded") blueprintAdded = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverAdded.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }

}
