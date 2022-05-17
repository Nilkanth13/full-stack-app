import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  id: number;
  employee: Employee;
  constructor(private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.viewEmployee(this.id);
  }

  private viewEmployee(id: number) {

     this.employeeService.getEmployeeById(id).subscribe( data => {
        this.employee = data;
     });

  }

}
