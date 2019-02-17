import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Person } from '../person';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
@Output() added = new EventEmitter<Person>();
  employeeForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      city: new FormControl(''),
      email: new FormControl(''),
      doj: new FormControl('')
    });
  }

  add() {
    this.added.emit(this.employeeForm.value);
  }
}
