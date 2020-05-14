import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseService } from '../utils/services/response.service';

export interface User {
  emailAddress: string;
  fullName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl;
  loginUrl;


  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.registerUrl = environment.apiRoot + 'auth/register';
    this.loginUrl = environment.apiRoot + 'auth/authenticate';
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user).pipe(
      catchError(this.responseService.handleError)
    );
  }

  login(user: User): Observable<string> {
    return this.http.post<string>(this.loginUrl, user).pipe(
      catchError(this.responseService.handleError)
    );
  }
}
