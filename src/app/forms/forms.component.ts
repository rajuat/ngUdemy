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
  genders = ['Male', 'Female'];
  user = {
    name: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    //this.userForm.setValue for reset of whole form
    this.userForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.name = this.userForm.value.userData.username;
    this.user.email = this.userForm.value.userData.email;
    this.user.question = this.userForm.value.secret;
    this.user.answer = this.userForm.value.questionsAnswer;
    this.user.gender = this.userForm.value.gender;

    //reset
    this.userForm.reset();
  }

}
