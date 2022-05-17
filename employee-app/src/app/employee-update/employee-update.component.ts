import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.id = this.activedRoute.snapshot.params['id'];

      this.employeeService.getEmployeeById(this.id).subscribe( data => {
         this.employee = data;
      }, error => console.log(error));

  }

  onSubmit(){
     this.updateEmployee();
  }

  private updateEmployee(){
      this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
        this.employee = new Employee();
        this.navigateToEmpList(); 
      })
  }

  private navigateToEmpList(){
     this.router.navigate(["employees"]);
  }
}
