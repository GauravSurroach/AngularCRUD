import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee';
import { AddEmployee } from '../employee/add-employee/add-employee';
import { EditEmployee } from '../employee/edit-employee/edit-employee';
import id from '@angular/common/locales/extra/id';

@Component({
  selector: 'app-employee-list',
  imports: [DecimalPipe,AddEmployee,EditEmployee],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employees: Employee[] = [];
  isAddEmployeeModalOpen = false;

  isEditEmployeeModalOpen = false;
  selectedEmployee: Employee | null = null;

  isDeleteModalOpen = false;
  employeeToDelete: Employee | null = null;

  constructor(
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {

    this.employeeService.getEmployees().subscribe({

      next: (data: Employee[]) => {

        console.log('API DATA:', data);

        this.employees = data;

        console.log('EMPLOYEE COUNT:', this.employees.length);

        // Tell Angular to update the HTML
        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('Error loading employees:', error);

      }

    });

  }

  openAddEmployeeModal(): void {
    this.isAddEmployeeModalOpen = true;
  }

  closeAddEmployeeModal(): void {
    console.log('PARENT: closeAddEmployeeModal fired');
    this.isAddEmployeeModalOpen = false;
  }

  onEmployeeCreated(employee: Employee): void {
    this.employees.push(employee);
  }

  openEditEmployeeModal(employee: Employee): void {
    this.selectedEmployee = { ...employee };
    this.isEditEmployeeModalOpen = true;
  }

  closeEditEmployeeModal(): void {
    console.log('PARENT: closeEditEmployeeModal fired');
    this.isEditEmployeeModalOpen = false;
  }

  onEmployeeUpdated(updatedEmployee: Employee): void {
    console.log("id");
    console.log(updatedEmployee.id);
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    console.log("inside on employee updated");
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  openDeleteModal(employee: Employee): void {
    // Set the employee to be deleted
    this.employeeToDelete = employee;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
    this.employeeToDelete = null;
  }

  confirmDeleteEmployee(): void {

    if (!this.employeeToDelete) {
      return;
    }
// Get the ID of the employee to delete
    const id = this.employeeToDelete.id;

    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {

        console.log('Employee deleted successfully');

// Update the employee list by filtering out the deleted employee
        this.employees = this.employees.filter(
          employee => employee.id !== id
        );

        this.employeeToDelete = null;
        this.isDeleteModalOpen = false;

        //Tell Angular to update the HTML
        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('Error deleting employee:', error);
      }
    });
  }

}
