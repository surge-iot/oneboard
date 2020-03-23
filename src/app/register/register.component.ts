import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService, User } from '../services/auth.service';
import { ResponseService } from '../services/response.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm;
  constructor(private formBuilder: FormBuilder, private authService:AuthService, private responseService: ResponseService, private router: Router ) {
    this.registerForm = this.formBuilder.group({
      emailAddress: '',
      password: '',
      fullName: ''
    });
  }

  ngOnInit(): void {
  }

  register(user:User) {
    this.authService.register(user)
    .subscribe((data: User) => {
      this.responseService.handleSuccess('Registration successful');
      this.router.navigate(['/login']);

    });
  }

}
