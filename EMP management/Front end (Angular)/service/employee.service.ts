import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 // [x: string]: any;

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;
  exportPdfUrl : string;
  exportExcelUrl : string;
 // httpClient: any;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:8080/api/employee/addEmployee';
    this.getEmpURL = 'http://localhost:8080/api/employee/getAll';
    this.updateEmpUrl = 'http://localhost:8080/api/employee/updateEmployee';
    this.deleteEmpUrl = 'http://localhost:8080/api/employee/deleteEmployeeById';
    this.exportPdfUrl = 'http://localhost:8080/api/employee/export/1';
    this.exportExcelUrl = 'http://localhost:8080/api/employee/export/2';


   }

   addEmployee(emp : Employee): Observable<Employee> {
     return this.http.post<Employee>(this.addEmpURL,emp);
   }

   getAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>(this.getEmpURL);
   }

   updateEmployee(emp :Employee) : Observable<Employee>{
     return this.http.put<Employee>(this.updateEmpUrl+'/'+emp.id, emp);
   }

   deleteEmployee(emp : Employee) : Observable<Employee> {
     return this.http.delete<Employee>(this.deleteEmpUrl+'/'+emp.id);
   }
   
   exportPdf(): Observable<Blob>{
    return this.http.get(this.exportPdfUrl, {responseType: 'blob'});
   }

   exportExcel(): Observable<Blob>{
    return this.http.get(this.exportExcelUrl, {responseType: 'blob'});
   }

   
  

}
