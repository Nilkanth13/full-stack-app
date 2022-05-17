import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;
  
  constructor(private employeeService : EmployeeService,
    private router: Router) { }

  ngOnInit(): void {      
      this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {  
        console.log(data);              
        this.employees = data;        
    });    
  }

  updateEmp(id: number){
    this.router.navigate(["/update", id]);
  }

  deleteEmp(id: number){
      this.employeeService.deleteEmployeeById(id).subscribe( data => {
         this.getEmployees();
      })
  }

  viewEmp(id: number){
    this.router.navigate(["/view", id]);
  }
}
