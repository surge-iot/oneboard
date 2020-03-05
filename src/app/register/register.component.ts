import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm;
  constructor(private formBuilder: FormBuilder, private authService:AuthService ) {
    this.registerForm = this.formBuilder.group({
      emailAddress: '',
      password: '',
      fullName: ''
    });
  }

  ngOnInit(): void {
  }

  register(user) {
    this.authService.register(user)
    .subscribe((data: User) => alert(data));
  }

}
