import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService, User } from '../services/auth.service';
import { ResponseService } from '../services/response.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private responseService: ResponseService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      emailAddress: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  login(user: User) {
    this.authService.login(user)
      .subscribe((data: string) =>{
        localStorage.setItem('access_token', data)
        this.responseService.handleSuccess('Login successful');
        this.router.navigate(['/operator']);
      }
    );
  }
}
