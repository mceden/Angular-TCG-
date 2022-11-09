import { Injectable } from "@angular/core";

@Injectable()
export class UserServices {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];
  count: number = 0;

  setToActiveUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
  constructor() {}
}
