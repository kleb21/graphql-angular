import { Component, inject, OnInit } from "@angular/core";
import { UserListService } from "./services/users-list.serivce";
import { SignalsService } from "../../services/signals.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styles: ``,
})
export class UsersListComponent implements OnInit {
  public data: any;

  private usersListService: UserListService = inject(UserListService);
  private signalsService: SignalsService = inject(SignalsService);

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.usersListService.getUsersList().subscribe((data) => {
      this.data = data.data.users;
    });
  }

  createUser() {
    this.signalsService.setcreateOrEditSignal(false);
  }

  deleteUser(id: string): void {
    this.usersListService.deleteUserList(id).subscribe(() => {
      this.getData();
    });
  }

  updateUser(id: string): void {
    this.signalsService.setcreateOrEditSignal(true);
    this.signalsService.setIdtoUpdate(id);
  }
}
