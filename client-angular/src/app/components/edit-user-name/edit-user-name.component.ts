import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GraphqlServiceService } from "../../services/graphql-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-user-name",
  templateUrl: "edit-user-name.component.html",
  styles: ``,
})
export class EditUserNameComponent {
  public editUserName!: FormGroup;
  public userId!: string;

  constructor(
    private fb: FormBuilder,
    private graphqlService: GraphqlServiceService,
    private route: ActivatedRoute
  ) {
    this.editUserName = this.fb.group({
      username: ["", Validators.required],
    });

    this.route.params.subscribe((params) => {
      this.userId = params["id"];
    });
  }

  updateUser() {
    const userName = this.editUserName.get("username")?.value;

    this.graphqlService.updateUsername(this.userId, userName).subscribe();
  }
}
