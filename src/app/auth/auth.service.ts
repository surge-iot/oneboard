import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseService } from '../utils/services/response.service';
import * as jwt_decode from "jwt-decode";

export interface User {
  id?: number;
  email: string;
  name: string;
  password?: string;
  isAdmin?: boolean;
}

export interface Token {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl;
  loginUrl;


  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.registerUrl = environment.apiRoot + 'auth/register';
    this.loginUrl = environment.apiRoot + 'auth/login';
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user).pipe(
      catchError(this.responseService.handleError)
    );
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, user).pipe(
      catchError(this.responseService.handleError)
    );
  }

  getDecodedAccessToken(): any {
    try {
      return jwt_decode(localStorage.getItem('access_token'));
    }
    catch (Error) {
      return null;
    }
  }

  getUser(): User {
    return this.getDecodedAccessToken();
  }
}
