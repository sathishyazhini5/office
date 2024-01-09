import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { DisplayLeaveComponent } from './display-leave/display-leave.component';

const routes: Routes = [
  { path : 'employee' , component : EmployeeComponent},
  { path : 'leaveapply' , component : LeaveApplyComponent},
  {path:'display',component:DisplayLeaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
