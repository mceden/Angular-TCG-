import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { CounterServices } from "../counter.services";
import { UserServices } from "../users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  constructor(
    private userServices: UserServices,
    private counterServices: CounterServices
  ) {}
  users: string[];
  count: number;

  onSetToInactive(id: number) {
    this.userServices.setToInactive(id);
    this.counterServices.add();
  }

  ngOnInit(): void {
    this.users = this.userServices.activeUsers;
  }
}
