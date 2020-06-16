import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../utils/services/response.service';
import { catchError, retry } from 'rxjs/operators';


export interface DeviceClass {
  id: string;
  name: string;
  parentId: string;
  meta: object;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceClassService {
  deviceClassUrl: string;
  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.deviceClassUrl = environment.apiRoot + 'device-class/';
  }
  // Get all root-level deviceClasses
  findRoots(): Observable<Location[]> {
    return this.http.get<Location[]>(this.deviceClassUrl + 'roots').pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get all deviceClasses
  findAll(): Observable<DeviceClass[]> {
    return this.http.get<DeviceClass[]>(this.deviceClassUrl).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get details about deviceClass identified by id
  findById(id: number): Observable<DeviceClass> {
    return this.http.get<DeviceClass>(this.deviceClassUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get children of deviceClass identified by id
  findChildren(id: number): Observable<DeviceClass> {
    return this.http.get<DeviceClass>(`${this.deviceClassUrl}?parentId=${id}`).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Create a new deviceClass
  create(props: Partial<DeviceClass>): Observable<DeviceClass> {
    return this.http.post<DeviceClass>(this.deviceClassUrl, props).pipe(
      catchError(this.responseService.handleError)
    )
  }
  // Delete a deviceClass by id
  delete(id: number): Observable<DeviceClass> {
    return this.http.delete<DeviceClass>(this.deviceClassUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
}
