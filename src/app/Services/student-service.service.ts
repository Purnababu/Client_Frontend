import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../components/Modals/employee';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  
  // private apiUrl = 'http://localhost:8080';

  private apiUrl = 'https://mybackendd-f58a90d206db.herokuapp.com';
  



  

  constructor(private http: HttpClient) { }

  registerEmployee(employee:Employee,roleName:string): Observable<any> {
    return this.http.post(`${this.apiUrl}/addEmployee/${roleName}`, employee);
  }

  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }

}
