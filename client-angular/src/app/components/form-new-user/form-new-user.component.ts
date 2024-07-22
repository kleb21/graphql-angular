import { Component, inject, Signal } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GraphqlServiceService } from "../../services/graphql-service.service";
import { UserActionsService } from "./services/user-actions.service";
import { Nationality } from "../../shared/nationalties";
import { SignalsService } from "../../services/signals.service";
import { Users } from "../../shared/Users.interface";

@Component({
  selector: "app-form-new-user",
  templateUrl: "./form-new-user.component.html",
  styles: ``,
})
export class FormNewUserComponent {
  public UserForm!: FormGroup<Users>;
  public nationalities = Object.values(Nationality);
  public isUpdating
  public userId!: Signal<string>;

  private readonly fb = inject(FormBuilder).nonNullable;

  constructor(
    private userActionsService: UserActionsService,
    private signalsService: SignalsService
  ) {
    this.UserForm = this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      age: ["", Validators.required],
      nationality: ["", Validators.required],
    });

    this.isUpdating = this.signalsService.createOrEditSignal;
    this.isUpdating();
    debugger
    this.userId = this.signalsService.IdtoUpdate;
  }

  createUser() {
    const input = {
      name: this.UserForm.controls.name.value,
      username: this.UserForm.controls.username.value ,
      age: this.UserForm.controls.age.value ,
      nationality: this.UserForm.controls.nationality.value,
    };

    this.userActionsService.createUser(input).subscribe();
  }

  updateUser() {
    let userName = this.UserForm.controls.username.value;
    const variables = {
      id: this.userId(),
      newUsername: userName,
    };

    this.userActionsService.updateUser(variables).subscribe();
  }
}
