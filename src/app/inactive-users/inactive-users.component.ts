import { Component, OnInit } from "@angular/core";
import { CounterServices } from "../counter.services";
import { UserServices } from "../users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(
    private userServices: UserServices,
    private counterServices: CounterServices
  ) {}

  onSetToActive(id: number) {
    this.userServices.setToActiveUser(id);
    this.counterServices.add();
  }
  ngOnInit() {
    this.users = this.userServices.inactiveUsers;
  }
}
