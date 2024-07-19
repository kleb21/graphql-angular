import { inject, Inject } from "@angular/core";
import { GraphqlServiceService } from "../../../services/graphql-service.service";
import { GET_USERS } from "../graphql/get-users-list.query";
import { Observable } from "rxjs";
import { DELETE_USER } from "../graphql/delete-users.query";

@Inject({
  provideIn: "root",
})
export class UserListService {
  graphqlService: GraphqlServiceService = inject(GraphqlServiceService);

  getUsersList(): Observable<any> {
    return this.graphqlService.query(GET_USERS);
  }

  deleteUserList(id: string): Observable<any> {
    return this.graphqlService.mutate(DELETE_USER, { id });
  }
}
