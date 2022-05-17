import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
  {path: 'employees' , component: EmployeeListComponent},
  {path: 'create' , component: EmployeeCreateComponent},
  {path: 'update/:id' , component: EmployeeUpdateComponent},
  {path: 'view/:id' , component: EmployeeViewComponent},
  {path: '' , redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
