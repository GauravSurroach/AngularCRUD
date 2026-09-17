import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://localhost:7073/api/Employee';

  constructor(private http: HttpClient) { }

  //to get employee list data from the API
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

//to create a new employee in the API
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  //to update an existing employee in the API
  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }

  //to delete an employee from the API

  deleteEmployee(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
