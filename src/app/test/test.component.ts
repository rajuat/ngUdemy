import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit() {
  }

}
