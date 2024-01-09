import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeform = new FormGroup({
    EmployeeId : new FormControl('',Validators.required),
    Firstname : new FormControl('',Validators.required),
    Lastname : new FormControl('',Validators.required),
    Dob : new FormControl('',Validators.required),
    Fathername : new FormControl('',Validators.required),
    Mothername : new FormControl('',Validators.required),
    Gender : new FormControl('',Validators.required),
    Nationality : new FormControl('',Validators.required),
    Religion : new FormControl('',Validators.required),
    Mobileno : new FormControl('',[Validators.required,Validators.maxLength(10)]),
    AlternateNo : new FormControl('',Validators.maxLength(10)),
    Maritalstatus : new FormControl(''),
    Aadharno : new FormControl('',[Validators.required,Validators.maxLength(12)]),
    PANno : new FormControl('',[Validators.required,Validators.maxLength(10)]),
    Passportno : new FormControl('',[Validators.required,Validators.maxLength(12)]),
    Doj :  new FormControl(''),
    TypeId :  new FormControl(''),
    OrgId : new FormControl('',Validators.required),
    BranchId : new FormControl('',Validators.required)
  });

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  isSubmit = false;  //for button

}
