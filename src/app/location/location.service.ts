import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../utils/services/response.service';
import { catchError, retry } from 'rxjs/operators';


export interface Location {
  id: number;
  name: string;
  classId: string;
  parentId: number | null;
  meta: {};
  children: Location[];
  links: Location[]
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationUrl: string;
  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.locationUrl = environment.apiRoot + 'location/';
  }
  // Get all root-level locations that the logged-in user is allowed to access
  getRootLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl + '?parentId=null').pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get all locations that the logged-in user is allowed to access
  findAll(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get details abouut location identified by id
  findById(id: number): Observable<Location> {
    return this.http.get<Location>(this.locationUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  findChildren(id:number): Observable<Location[]>{
    return this.http.get<Location[]>(`${this.locationUrl}${id}/children` ).pipe(
      catchError(this.responseService.handleError)
    );
  }

  findParents(id:number): Observable<Location[]>{
    return this.http.get<Location[]>(`${this.locationUrl}${id}/parents` ).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Create a new locationClass
  create(props: Partial<Location>): Observable<Location> {
    return this.http.post<Location>(this.locationUrl, props).pipe(
      catchError(this.responseService.handleError)
    )
  }
  // Delete a locationClass by id
  delete(id: number): Observable<Location> {
    return this.http.delete<Location>(this.locationUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  addChild(id:number, childId:number): Observable<number>{
    return this.http.put<number>(`${this.locationUrl}${id}/add-child/${childId}`,null ).pipe(
      catchError(this.responseService.handleError)
    );
  }
  removeChild(id:number, childId:number): Observable<number>{
    return this.http.delete<number>(`${this.locationUrl}${id}/remove-child/${childId}`).pipe(
      catchError(this.responseService.handleError)
    );
  }
}
