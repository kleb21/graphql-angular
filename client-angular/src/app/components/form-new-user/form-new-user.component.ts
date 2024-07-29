import { Component, inject, Signal } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserActionsService } from "./services/user-actions.service";
import { Nationality } from "../../shared/models/nationalties";
import { SignalsService } from "../../services/signals.service";
import { Users } from "../../shared/models/Users.interface";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-form-new-user",
  templateUrl: "./form-new-user.component.html",
  styles: ``,
})
export class FormNewUserComponent {
  public UserForm!: FormGroup<Users>;
  public nationalities = Object.values(Nationality);
  public isUpdating;
  public userId!: Signal<string>;

  private readonly fb = inject(FormBuilder).nonNullable;
  private toastrService: ToastrService = inject(ToastrService);

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
    this.userId = this.signalsService.IdtoUpdate;
  }

  createUser() {
    const input = {
      name: this.UserForm.controls.name.value,
      username: this.UserForm.controls.username.value,
      age: this.UserForm.controls.age.value,
      nationality: this.UserForm.controls.nationality.value,
    };

    this.userActionsService.createUser(input).subscribe(() => {
      this.toastrService.success('User Created', 'Success');
    });
  }

  updateUser() {
    
    const userName = this.UserForm.controls.username.value;
    const variables = {
      id: this.userId(),
      newUsername: userName,
    };

    this.userActionsService.updateUser(variables).subscribe(() => {
      this.toastrService.success('User Updated', 'Success');
    });
  }

  isFieldInvalid(field: keyof Users): boolean {
    return (
      this.UserForm.controls[field].invalid &&
      (this.UserForm.controls[field].touched || this.UserForm.controls[field].dirty)
    );
  }

  getFieldClass(field: keyof Users): string {
    return this.isFieldInvalid(field) ? 'border-red-500' : 'border-gray-300';
  }

}
