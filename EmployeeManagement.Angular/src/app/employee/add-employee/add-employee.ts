import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {

  @Output() close = new EventEmitter<void>();
  @Output() employeeCreated = new EventEmitter<Employee>();

  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    department: '',
    salary: 0
  };

  constructor(private employeeService: EmployeeService) { }

  createEmployee(): void {
    console.log("inside create employee");
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (response) => {

        console.log('Employee created successfully', response);
        this.employeeCreated.emit(response);
        this.close.emit();
      },
      error: (error) => {

        console.error('Error creating employee', error);

      }
    });

  }

  closeModal(): void {
    this.close.emit();
  }
}
