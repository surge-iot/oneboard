import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../services/response.service';
import { catchError, retry } from 'rxjs/operators';


export interface Location {
  id: number;
  name: string;
  network: string;
  properties: object;
  isLocatedIn:number;
  children:Array<Location>
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationUrl:string;
  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.locationUrl = environment.apiRoot + 'location/';
  }
  // Get all root-level locations that the logged-in user is allowed to access
  getRootLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get details abouut location identified by id
  getLocation (id:number): Observable<Location> {
    return this.http.get<Location>(this.locationUrl+id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get children of location
  getChildren (location:Location): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl+location.id+'/children').pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get ancestors of location
  getAncestors (location:Location): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl+location.id+'/ancestors').pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get descendants of location
  getDescendants (location:Location): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl+location.id+'/descendants').pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get path of location
  getPath (location:Location): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationUrl+location.id+'/path').pipe(
      catchError(this.responseService.handleError)
    );
  }

}
