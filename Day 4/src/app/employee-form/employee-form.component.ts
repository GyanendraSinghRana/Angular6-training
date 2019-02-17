import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Person } from '../person';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: Person;
  @Output() save = new EventEmitter<Person>();

  employeeForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      id: new FormControl(this.employee.id),
      name: new FormControl(this.employee.name),
      city: new FormControl(this.employee.city),
      email: new FormControl(this.employee.email),
      doj: new FormControl(this.employee.doj)
    });
  }

  onSubmit() {
    this.save.emit(this.employeeForm.value);
  }

}
