import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import {EmployeeFormData} from '../material/datatype'

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent {

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
   
    if (view === 'month') {
      const date = cellDate.getDate();

     
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  isSubmit = false; 

  leaveapplyform = new FormGroup({
    EmployeeId : new FormControl('', Validators.required),
    LeaveType : new FormControl('',Validators.required),
    FromDate : new FormControl('',Validators.required),
    ToDate : new FormControl('',Validators.required),
    NoOfDays : new FormControl('',Validators.required),
    Reason : new FormControl('',Validators.required),
    Description : new FormControl('',Validators.required),
    AppliedDate : new FormControl('',Validators.required),
    ApprovalBy : new FormControl('',Validators.required),
    Status : new FormControl('',Validators.required)
  })
  
  constructor(private http: HttpClient) {}
  // onSubmit() {
  //   if (this.leaveapplyform.valid) {
  //     this.isSubmit = true;

  //     const formData = this.leaveapplyform.value;
  //     console.log(formData);
  //     const apiUrl = 'http://localhost:8500/api/saveleave';

  //     this.http.post(apiUrl, formData).subscribe(
  //       (response) => {
  //         console.log('Data saved successfully:', response);
  //         this.isSubmit = false;
  //         this.leaveapplyform.reset(); 
  //       },
  //       (error) => {
  //         console.error('Error occurred:', error);
  //         this.isSubmit = false;
  //       }
  //     );
  //   } else {
  //     console.log("Form is invalid.");
  //   }
  // }
  onSubmit() {
    if (this.leaveapplyform.valid) {
      this.isSubmit = true;
  
      const formData = this.leaveapplyform.value;
      const mappedData = {
        emp_id: formData.EmployeeId,
        leave_type: formData.LeaveType,
        from_date: formData.FromDate,
        to_date: formData.ToDate,
        no_of_days: formData.NoOfDays,
        reason: formData.Reason,
        description: formData.Description,
        applied_date: formData.AppliedDate,
        approval_by: formData.ApprovalBy,
        status: formData.Status,
      };
      console.log(mappedData);
      const apiUrl = 'http://localhost:8500/api/saveleave';
  
      this.http.post(apiUrl, mappedData).subscribe(
        (response) => {
          console.log('Data saved successfully:', response);
          this.isSubmit = false;
          this.leaveapplyform.reset();
        },
        (error) => {
          console.error('Error occurred:', error);
          this.isSubmit = false;
        }
      );
    } else {
      console.log("Form is invalid.");
    }
  }
  
}
