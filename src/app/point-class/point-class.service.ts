import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../utils/services/response.service';
import { catchError, retry } from 'rxjs/operators';


export interface PointClass {
  id: string;
  name: string;
  parentId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PointClassService {
  pointClassUrl: string;
  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.pointClassUrl = environment.apiRoot + 'point-class/';
  }
  // Get all pointClasses
  findAll(): Observable<PointClass[]> {
    return this.http.get<PointClass[]>(this.pointClassUrl).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get details abouut pointClass identified by id
  findById(id: number): Observable<PointClass> {
    return this.http.get<PointClass>(this.pointClassUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Create a new pointClass
  create(props: Partial<PointClass>): Observable<PointClass> {
    return this.http.post<PointClass>(this.pointClassUrl, props).pipe(
      catchError(this.responseService.handleError)
    )
  }
  // Delete a pointClass by id
  delete(id: number): Observable<PointClass> {
    return this.http.delete<PointClass>(this.pointClassUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
}
