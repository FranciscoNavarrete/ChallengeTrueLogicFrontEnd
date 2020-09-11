import { Component } from '@angular/core';
import { EmployeesService } from './services/employees.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface EmployeesDTO {
  // name: string;
  // flag: string;
  // area: number;
  // population: number;

  id: string;
  name: string;
  contractTypeName: string;
  roleId: number;
  roleName: string;
  roleDescription: string;
  hourlySalary: number;
  monthlySalary:number;
  annual:number;
    
}

// const EMPLOYEES: Employees[] = [
//   {
//     id: 1,
//      name:'Juan',
//      contractTypeName: 'HourlySalaryEmployee',
//      roleId: 1,
//      roleName: 'Administrator',
//      roleDescription: ' ',
//      hourlySalary: 60000.0,
//      monthlySalary:80000.0,
//      AnnualSalary: 0
//   },
//   {
//     id: 2,
//      name:'Sebastian',
//      contractTypeName: 'MonthlySalaryEmployee',
//      roleId: 2,
//      roleName: 'Contractor',
//      roleDescription: ' ',
//      hourlySalary: 60000.0,
//      monthlySalary:80000.0,
//      AnnualSalary: 0
//   }
// ];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  form : FormGroup;
  title = 'fabrica-app';

  employees: EmployeesDTO[] ;
  


  constructor(private employeesService: EmployeesService,
              private fb: FormBuilder) {    
    // this.cargarEmpleados();
    this.crearFormulario();
  }

  ngOnInit(){}
  
  crearFormulario(){
    this.form = this.fb.group({
      search: ['']
    });
  }

  cargarEmpleados(){

    //leer el form
    let search= this.form.get('search').value;
    console.log(search);
    //agarras el valor
    if(search == null || search == ''){
      search = 0;
    }

    this.employeesService.GetEmployees(search)
    .subscribe(resp =>{

      this.employees = resp;
      console.log(resp);
      console.log('Obtiene los valores de la api')

    })
  }
  // guardar(form: NgForm){
  //   if(form.invalid){
  //     console.log('Formulario no valido');
  //     return;
  //   }
  //   this.employeesService.GetEmployees(this.employees)
  //   .subscribe(resp =>{
  //     console.log(resp);
  //   });
  // }
}


