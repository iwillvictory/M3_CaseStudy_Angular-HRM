import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment} from '../../environments/environment';
import {Department} from '../models/department-model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  formData: Department;
  readonly apiUrl = environment.apiUrl;
  private listener = new Subject<any>();
  constructor(private httpClient: HttpClient) { }

  getDepartmentList(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.apiUrl}/departments/`);
  }

  addDepartment(department: Department) {
    return this.httpClient.post(`${this.apiUrl}/departments/`, department);
  }

  deleteDepartment(depId: number)  {
    return this.httpClient.delete(`${this.apiUrl}/departments/${depId}`);
  }

  listen(): Observable<any> {
    return this.listener.asObservable();
  }
  filter(filterBy: string) {
    this.listener.next(filterBy);
  }

}
