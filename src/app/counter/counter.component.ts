import { Component, OnInit } from "@angular/core";
import { CounterServices } from "../counter.services";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit {
  constructor(private counterServices: CounterServices) {
    this.counterServices.count.subscribe((count) => (this.counter = count));
  }
  counter: number;
  ngOnInit(): void {}
}
