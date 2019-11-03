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
  constructor(private httpClient: HttpClient) { }

  getDepartmentList(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.apiUrl}/departments/`);
  }

  addDepartment(department: Department){
    return this.httpClient.post(`${this.apiUrl}/departments/`, department);
  }
}
