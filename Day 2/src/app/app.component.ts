import { Component } from '@angular/core';

interface Person {
  name: string,
  age: number,
  address: string,
  email: string,
  isGraduate: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[] = [
    {name: "Gyan", age: 30, address: "Aundh", email: "gyan@gmail", isGraduate: true},
    {name: "Rahul", age: 31, address: "Nidgi", email: "rahul@gmail", isGraduate: true},
    {name: "Kiran", age: 30, address: "Pimpri", email: "kiran@gmail", isGraduate: false},
    {name: "Ravi", age: 31, address: "Kothrud", email: "ravi@gmail", isGraduate: true},
    {name: "Shakti", age: 30, address: "Pune", email: "shakti@gmail", isGraduate: false},
  ];

  gradutePeople: Person[] = this.people.filter( person => person.isGraduate);
  inputValue: any = "hi";
  focused: boolean = false;
  
  myFunction(val: boolean) {
    this.focused = val;
  }
}
