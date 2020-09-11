import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { EmployeesDTO } from '../app.component';
import { map } from 'rxjs/operators';


@Injectable()

export class EmployeesService{

    // private url = 'http://masglobaltestapi.azurewebsites.net/api/Employees';
    private url = 'https://localhost:44329/api/Employees/GetEmployees/';

    private employeesDTO: any[] = [];

    constructor (private http: HttpClient){

    }
    // public GetEmployees(){
    //     return this.employees;
    // }
    public GetEmployees(id){
        return this.http.get(`${this.url}`+ id)
        .pipe(
            map(this.CrearArreglo)
        );
    }

    private CrearArreglo(employeesObj: Object){
        
        const employees: EmployeesDTO[]=[];
        
         console.log('Esta usando el servicio');

        Object.keys(employeesObj).forEach(key =>{
            const employee: EmployeesDTO = employeesObj[key];
            // employee.id = key;

            employees.push(employee);
        });

        if(employeesObj === null){return [];}    

        return employees;
    }

}