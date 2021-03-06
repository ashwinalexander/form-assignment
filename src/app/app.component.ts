import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultSubscription = 'advanced';
  @ViewChild('g') signUpForm: NgForm;

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
