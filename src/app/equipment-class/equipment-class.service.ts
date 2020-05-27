import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../utils/services/response.service';
import { catchError, retry } from 'rxjs/operators';


export interface EquipmentClass {
  id: string;
  name: string;
  parentId: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipmentClassService {
  equipmentClassUrl: string;
  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.equipmentClassUrl = environment.apiRoot + 'equipment-class/';
  }
  // Get all root-level equipmentClasses
  findRoots(): Observable<Location[]> {
    return this.http.get<Location[]>(this.equipmentClassUrl + 'roots').pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get all equipmentClasses
  findAll(): Observable<EquipmentClass[]> {
    return this.http.get<EquipmentClass[]>(this.equipmentClassUrl).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get details about equipmentClass identified by id
  findById(id: number): Observable<EquipmentClass> {
    return this.http.get<EquipmentClass>(this.equipmentClassUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get children of equipmentClass identified by id
  findChildren(id: number): Observable<EquipmentClass> {
    return this.http.get<EquipmentClass>(`${this.equipmentClassUrl}?parentId=${id}`).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Create a new equipmentClass
  create(props: Partial<EquipmentClass>): Observable<EquipmentClass> {
    return this.http.post<EquipmentClass>(this.equipmentClassUrl, props).pipe(
      catchError(this.responseService.handleError)
    )
  }
  // Delete a equipmentClass by id
  delete(id: number): Observable<EquipmentClass> {
    return this.http.delete<EquipmentClass>(this.equipmentClassUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
}
