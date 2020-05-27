import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseService } from '../utils/services/response.service';
import { catchError, retry } from 'rxjs/operators';


export interface Equipment {
  id: number;
  name: string;
  classId: string;
  parentId: number | null;
  locationId: number | null;
  meta: {};
  children: Equipment[];
  links: Equipment[]
}

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  equipmentUrl: string;
  constructor(private http: HttpClient, private responseService: ResponseService) {
    this.equipmentUrl = environment.apiRoot + 'equipment/';
  }
  // Get all root-level equipments that the logged-in user is allowed to access
  findRoots(): Observable<Location[]> {
    return this.http.get<Location[]>(this.equipmentUrl + 'roots').pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get all equipments that the logged-in user is allowed to access
  findAll(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.equipmentUrl).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Get details abouut equipment identified by id
  findById(id: number): Observable<Equipment> {
    return this.http.get<Equipment>(this.equipmentUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  findChildren(id:number): Observable<Location[]>{
    return this.http.get<Location[]>(`${this.equipmentUrl}${id}/children` ).pipe(
      catchError(this.responseService.handleError)
    );
  }

  findParents(id:number): Observable<Location[]>{
    return this.http.get<Location[]>(`${this.equipmentUrl}${id}/parents` ).pipe(
      catchError(this.responseService.handleError)
    );
  }
  // Create a new equipment
  create(props: Partial<Equipment>): Observable<Equipment> {
    return this.http.post<Equipment>(this.equipmentUrl, props).pipe(
      catchError(this.responseService.handleError)
    )
  }
  // Delete a equipment by id
  delete(id: number): Observable<Equipment> {
    return this.http.delete<Equipment>(this.equipmentUrl + id).pipe(
      catchError(this.responseService.handleError)
    );
  }
  addChild(id:number, childId:number): Observable<number>{
    return this.http.put<number>(`${this.equipmentUrl}${id}/add-child/${childId}`,null ).pipe(
      catchError(this.responseService.handleError)
    );
  }
  removeChild(id:number, childId:number): Observable<number>{
    return this.http.delete<number>(`${this.equipmentUrl}${id}/remove-child/${childId}`).pipe(
      catchError(this.responseService.handleError)
    );
  }

}
