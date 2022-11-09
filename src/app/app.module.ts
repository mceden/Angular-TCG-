import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ActiveUsersComponent } from "./active-users/active-users.component";
import { InactiveUsersComponent } from "./inactive-users/inactive-users.component";
import { UserServices } from "./users.service";
import { CounterComponent } from "./counter/counter.component";
import { CounterServices } from "./counter.services";

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    CounterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UserServices, CounterServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
