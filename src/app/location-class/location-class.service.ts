import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../utils/services/response.service';
import { catchError, retry } from 'rxjs/operators';


export interface LocationClass {
  id: string;
  name: string;
  parentId: string;
  meta:any;
}

@Injectable({
  providedIn: 'root'
})
export class LocationClassService {
  locationClassUrl: string;
  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.locationClassUrl = environment.apiRoot + 'location-class/';
  }
  // Get all root-level locationsClasses
  findRoots(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationClassUrl + 'roots').pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get all locationClasses
  findAll(): Observable<LocationClass[]> {
    return this.http.get<LocationClass[]>(this.locationClassUrl).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get details about locationClass identified by id
  findById(id: number): Observable<LocationClass> {
    return this.http.get<LocationClass>(this.locationClassUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get children of locationClass identified by id
  findChildren(id: number): Observable<LocationClass> {
    return this.http.get<LocationClass>(`${this.locationClassUrl}?parentId=${id}`).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Create a new locationClass
  create(props: Partial<LocationClass>): Observable<LocationClass> {
    return this.http.post<LocationClass>(this.locationClassUrl, props).pipe(
      catchError(this.responseService.handleError)
    )
  }
  // Delete a locationClass by id
  delete(id: number): Observable<LocationClass> {
    return this.http.delete<LocationClass>(this.locationClassUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
}
