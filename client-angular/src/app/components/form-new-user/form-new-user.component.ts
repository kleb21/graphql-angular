import { Component } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GraphqlServiceService } from "../../services/graphql-service.service";
import { UserActionsService } from "./services/user-actions.service";
import { Nationality } from "../../shared/nationalties";
import { SignalsService } from "../../services/signals.service";

@Component({
  selector: "app-form-new-user",
  templateUrl: "./form-new-user.component.html",
  styles: ``,
})
export class FormNewUserComponent {
  public UserForm!: FormGroup;
  public nationalities = Object.values(Nationality);
  public isUpdating: boolean = false;
  public userId: string = "";

  constructor(
    private fb: FormBuilder,
    private userActionsService: UserActionsService,
    private signalsService: SignalsService
  ) {
    this.UserForm = this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      age: ["", Validators.required],
      nationality: ["", Validators.required],
    });

    this.isUpdating = this.signalsService.getBooleanSignal()();
    this.userId = this.signalsService.getIdtoUpdate()();
  }

  createUser() {
    const input = {
      name: this.UserForm.get("name")?.value as string,
      username: this.UserForm.get("username")?.value as string,
      age: this.UserForm.get("age")?.value as number,
      nationality: this.UserForm.get("nationality")?.value,
    };

    this.userActionsService.createUser(input).subscribe();
  }

  updateUser() {
    let userName = this.UserForm.get("username")?.value;
    const variables = {
      id: this.userId.toString(),
      newUsername: userName,
    };

    this.userActionsService.updateUser(variables).subscribe();
  }
}
