import { Injectable, EventEmitter } from "@angular/core";
@Injectable()
export class CounterServices {
  counter: number = 0;
  count = new EventEmitter();
  add() {
    this.counter++;
    console.log(this.counter);
    this.count.emit(this.counter);
  }
}
