import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee';

@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-edit-employee',
  styleUrl: './edit-employee.css',
  templateUrl: './edit-employee.html',
})
export class EditEmployee {

  constructor(private employeeService: EmployeeService) { }

  @Input() employee!: Employee;
  @Output() close = new EventEmitter<void>();
  @Output() employeeUpdated = new EventEmitter<Employee>();

  closeEditEmployeeModal() {
    this.close.emit();
  }

  updateEmployee(): void {

    this.employeeService.updateEmployee(this.employee).subscribe({
      next: (response) => {
        this.employeeUpdated.emit(response);
        this.close.emit();
      },
      error: (error) => {
        console.error('Error updating employee', error);
      }
    });
  }

}
