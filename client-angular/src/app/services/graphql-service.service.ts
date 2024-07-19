import { Injectable } from "@angular/core";
import { Apollo, TypedDocumentNode } from "apollo-angular";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GraphqlServiceService {
  constructor(private apollo: Apollo) {}

  query(query: TypedDocumentNode<unknown, unknown>): Observable<any> {
    return this.apollo.query({
      query: query,
      fetchPolicy: "network-only",
    });
  }

  mutate(
    mutation: TypedDocumentNode<unknown, unknown>,
    vars?: any
  ): Observable<any> {
    debugger;
    return this.apollo.mutate({
      mutation: mutation,
      variables: vars,
      fetchPolicy: "network-only",
    });
  }
}
