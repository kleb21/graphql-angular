import { GraphqlServiceService } from "../../../services/graphql-service.service";
import { Inject, inject } from "@angular/core";
import { CREATE_USER } from "../graphql/create-user.query";
import { Observable } from "rxjs";
import { UPDATE_USERNAME } from "../graphql/update-user.query";

@Inject({
  provideIn: "root",
})
export class UserActionsService {
  graphqlService: GraphqlServiceService = inject(GraphqlServiceService);

  createUser(input: any): Observable<any> {
    return this.graphqlService.mutate(CREATE_USER, { input });
  }

  updateUser(input: any): Observable<any> {
    return this.graphqlService.mutate(UPDATE_USERNAME, { input });
  }
}
