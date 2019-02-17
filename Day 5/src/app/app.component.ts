import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emptoUpdate: any;
  index: number;
  new: boolean = false;
  employees: Person[] = [
    {id: 4001, name: "Gyan", city: "Aundh", email: "gyan@gmail", doj: "2017-06-25"},
    {id: 4002, name: "Rahul", city: "Nidgi", email: "rahul@gmail", doj: "2017-07-01"},
    {id: 4003, name: "Kiran", city: "Pimpri", email: "kiran@gmail", doj: "2018-04-06"},
    {id: 4004, name: "Ravi", city: "Kothrud", email: "ravi@gmail", doj: "2018-01-05"},
    {id: 4005, name: "Shakti", city: "Pune", email: "shakti@gmail", doj: "2015-10-12"},
  ];
  
  update(emp: Person, i: number) {
    this.emptoUpdate = emp;
    this.index = i;
    this.new = false;
  }

  updated(emp: Person){
    this.employees[this.index] = emp;
    this.emptoUpdate = undefined;
  }

  add() {
    this.emptoUpdate = undefined;
    this.new = true;
  }

  added(newEmp: Person) {
    this.employees.push(newEmp);
    this.new = false;
  }
}
