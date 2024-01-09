import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-leave',
  templateUrl: './display-leave.component.html',
  styleUrls: ['./display-leave.component.css']
})
export class DisplayLeaveComponent {
  leaveDetails: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLeaveDetails();
  }

  getLeaveDetails() {
    const apiUrl = 'http://localhost:8500/api/getall1';

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.leaveDetails = data; // Assign API response to leaveDetails array
      },
      (error) => {
        console.error('Error occurred while fetching data:', error);
      }
    );
  }
  editLeaveDetail(detail: any) {
    // Logic for editing leave detail
    console.log('Editing leave detail:', detail);
  }

  deleteLeaveDetail(detail: any) {
    // Logic for deleting leave detail
    console.log('Deleting leave detail:', detail);
  }
}
