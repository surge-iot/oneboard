import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm;
  constructor( private formBuilder: FormBuilder,) {
    this.loginForm = this.formBuilder.group({
      emailAddress: '',
      password: ''
    });
   }

  ngOnInit(): void {
  }

  login(user) {
    this.loginForm.reset();

    console.warn('Your order has been submitted', user);
  }
  authenticate(){
    console.log("login using ldap");
  }
}
