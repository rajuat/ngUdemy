import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @ViewChild('f') userForm: NgForm;

  defaultQuestion = 'pet';
  answer = '';

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(){
    console.log(this.userForm);
  }

}
