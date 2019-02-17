import { Component } from '@angular/core';

interface Person {
  name: string,
  city: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Gyan";
  city: string = "Pune";
  people: Person[] = [];

  add() {
    this.people.push({name: this.name, city: this.city});
    this.name = "";
    this.city = "";
  }
}
