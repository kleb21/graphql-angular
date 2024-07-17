import { Component } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  GraphqlServiceService,
  Nationality,
} from "../../services/graphql-service.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-form-new-user",
  templateUrl: "./form-new-user.component.html",
  styles: ``,
})
export class FormNewUserComponent {
  public UserForm!: FormGroup;
  public nationalities = Object.values(Nationality);

  constructor(
    private fb: FormBuilder,
    private graphqlService: GraphqlServiceService
  ) {
    this.UserForm = this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      age: ["", Validators.required],
      nationality: ["", Validators.required],
    });
  }

  createUser() {
    const input = {
      name: this.UserForm.get("name")?.value as string,
      username: this.UserForm.get("username")?.value as string,
      age: this.UserForm.get("age")?.value as number,
      nationality: this.UserForm.get("nationality")?.value,
    };

    this.graphqlService.createUser(input).subscribe();
  }
}
