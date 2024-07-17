import { Component, OnInit } from "@angular/core";
import { GraphqlServiceService } from "../../services/graphql-service.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styles: ``,
})
export class UsersListComponent implements OnInit {
  public data: any;
  public updateForm: boolean = false;

  constructor(private graphqlServiceService: GraphqlServiceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.graphqlServiceService.getUsers().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  deleteUser(id: string) {
    this.graphqlServiceService.deleteUser(id).subscribe(() => {
      this.getData();
    });
  }
}
