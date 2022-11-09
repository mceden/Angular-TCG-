import { Component, OnInit } from "@angular/core";
import { CounterServices } from "./counter.services";
import { UserServices } from "./users.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  counter: number;
  constructor(private userService: UserServices, private counterServices: CounterServices) {}
  ngOnInit() {
    this.counter = this.counterServices.counter;
  }
}
