// employee-form-data.ts

// Define an interface for the form data
export interface EmployeeFormData {
    EmployeeId: string;
    LeaveType: string;
    FromDate: Date | null; // Date type or null to handle potential null values
    ToDate: Date | null;   // Date type or null to handle potential null values
    NoOfDays: number;
    Reason: string;
    Description: string;
    AppliedDate: Date | null; // Date type or null to handle potential null values
    ApprovalBy: string;
    Status: string;
  }
  