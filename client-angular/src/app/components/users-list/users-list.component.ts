import { Component, inject, OnInit } from "@angular/core";
import { UserListService } from "./services/users-list.serivce";
import { SignalsService } from "../../services/signals.service";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { User } from "../../shared/models/Users.interface";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styles: ``,
})
export class UsersListComponent implements OnInit {
  public data!: any;

  private usersListService: UserListService = inject(UserListService);
  private signalsService: SignalsService = inject(SignalsService);
  private toastrService: ToastrService = inject(ToastrService);

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.usersListService.getUsersList().subscribe((data) => {
      this.data = data.data.users ?? [];
    });
  }

  createUser() {
    this.signalsService.setcreateOrEditSignal(false);
  }

  deleteUser(id: string): void {
    this.usersListService.deleteUserList(id).subscribe(() => {
      this.getData();
      this.toastrService.success('Success', 'User Deleted');
    });
  }

  updateUser(id: string): void {
    this.signalsService.setcreateOrEditSignal(true);
    this.signalsService.setIdtoUpdate(id);
  }

  trackById(userId: any): number{
    return userId.id;
  }
}
