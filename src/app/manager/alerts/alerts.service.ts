import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseService } from 'src/app/utils/services/response.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private http: HttpClient) { }
  // Get all points that the logged-in user is allowed to access
  getAlertsEmbedUrl(): Observable<any> {
    return this.http.get<any>(environment.apiRoot + 'alerts-embed-url');
  }


}