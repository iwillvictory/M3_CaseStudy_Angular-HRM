import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment} from '../../environments/environment';
import {Employee} from '../models/employee-model';
import {Department} from '../models/department-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  readonly apiUrl = environment.apiUrl;
  private listener = new Subject<any>();
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}/employees/`);
  }

  addEmployee(employee: Employee) {
    return this.httpClient.post(`${this.apiUrl}/employees/`, employee);
  }

  deleteEmployee(depId: number)  {
    return this.httpClient.delete(`${this.apiUrl}/employees/${depId}`);
  }

  updateEmployee(employee: Employee) {
    return this.httpClient.put(`${this.apiUrl}/employees/`, employee);
  }

  getDepartDropDownValues(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.apiUrl}/departments/`);
  }

  listen(): Observable<any> {
    return this.listener.asObservable();
  }
  filter(filterBy: string) {
    this.listener.next(filterBy);
  }

}
