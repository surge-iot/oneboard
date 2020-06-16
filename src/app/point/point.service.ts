import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../utils/services/response.service';
import { catchError, retry } from 'rxjs/operators';
import { Equipment } from '../equipment/equipment.service';
import { Location } from '../location/location.service';
import { Device } from '../device/device.service';


export interface Point {
  meta: any;
  id: number;
  classId: string;
  name?: string;
  locationId: number | null;
  equipmentId: number | null;
  pointOfLocations: Location[];
  pointOfEquipments: Equipment[];
  devices: Device[];
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
  findAll(filters?): Observable<Point[]> {
    return this.http.get<Point[]>(this.pointUrl, { params: filters }).pipe(
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
  // Update a point
  update(id: number, props: Partial<Point>): Observable<Point> {
    return this.http.put<Point>(this.pointUrl + id, props).pipe(
      catchError(this.responseService.handleError)
    )
  }
  // Delete a pointClass by id
  delete(id: number): Observable<Point> {
    return this.http.delete<Point>(this.pointUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }

  addPointOfLocation(id: number, locationId: number): Observable<number> {
    return this.http.put<number>(`${this.pointUrl}${id}/add-point-of-location/${locationId}`, null).pipe(
      catchError(this.responseService.handleError)
    );
  }
  removePointOfLocation(id: number, locationId: number): Observable<number> {
    return this.http.delete<number>(`${this.pointUrl}${id}/remove-point-of-location/${locationId}`).pipe(
      catchError(this.responseService.handleError)
    );
  }

  addPointOfEquipment(id: number, equipmentId: number): Observable<number> {
    return this.http.put<number>(`${this.pointUrl}${id}/add-point-of-equipment/${equipmentId}`, null).pipe(
      catchError(this.responseService.handleError)
    );
  }
  removePointOfEquipment(id: number, equipmentId: number): Observable<number> {
    return this.http.delete<number>(`${this.pointUrl}${id}/remove-point-of-equipment/${equipmentId}`).pipe(
      catchError(this.responseService.handleError)
    );
  }
}
