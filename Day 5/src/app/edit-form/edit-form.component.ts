import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Person } from '../person';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  @Input() employee: Person;
  @Output() save = new EventEmitter<Person>();

  employeeForm: FormGroup;
  
  constructor() { }

  // ngOnInit() {
  //   this.employeeForm = new FormGroup({
  //     id: new FormControl(this.employee.id),
  //     name: new FormControl(this.employee.name),
  //     city: new FormControl(this.employee.city),
  //     email: new FormControl(this.employee.email),
  //     doj: new FormControl(this.employee.doj)
  //   });
  // }

  onSubmit() {
    this.save.emit(this.employeeForm.value);
  }

  ngOnChanges() {
    this.employeeForm = new FormGroup({
      id: new FormControl(this.employee.id),
      name: new FormControl(this.employee.name),
      city: new FormControl(this.employee.city),
      email: new FormControl(this.employee.email),
      doj: new FormControl(this.employee.doj)
    });
  }
}
