import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenNameArray = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    //two important hooks
    //this.signUpForm.statusChanges
    //this.signUpForm.valueChanges

    //set the value by default
    // this.signUpForm.setValue
    // this.signUpForm.patchValue
    // this.signUpForm.reset
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onHobbyAdded() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNameArray.indexOf(control.value) != -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null)
        }
      }, 1500);
    });
    return promise;
  }

}
