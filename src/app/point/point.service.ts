import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../utils/services/response.service';
import { catchError, retry } from 'rxjs/operators';
import { Equipment } from '../equipment/equipment.service';
import { Location } from '../location/location.service';


export interface Point {
  id: number;
  classId: string;
  locationId: number | null;
  equipmentId: number | null;
  pointOfLocations: Location[];
  pointOfEquipments: Equipment[];
}

@Injectable({
  providedIn: 'root'
})
export class PointService {
  pointUrl: string;
  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.pointUrl = environment.apiRoot + 'point/';
  }
  // Get all points that the logged-in user is allowed to access
  findAll(): Observable<Point[]> {
    return this.http.get<Point[]>(this.pointUrl).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get details abouut point identified by id
  findById(id: number): Observable<Point> {
    return this.http.get<Point>(this.pointUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }

  // Create a new pointClass
  create(props: Partial<Point>): Observable<Point> {
    return this.http.post<Point>(this.pointUrl, props).pipe(
      catchError(this.responseService.handleError)
    )
  }
  // Delete a pointClass by id
  delete(id: number): Observable<Point> {
    return this.http.delete<Point>(this.pointUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }

}
