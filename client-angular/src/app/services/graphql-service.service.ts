import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { BehaviorSubject, Observable, map } from "rxjs";

export enum Nationality {
  CANADA = "CANADA",
  BRAZIL = "BRAZIL",
  INDIA = "INDIA",
  GERMANY = "GERMANY",
  CHILE = "CHILE",
  UKRAINE = "UKRAINE",
}

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      username
      age
      nationality
    }
  }
`;

const GET_USERS = gql`
  query {
    users {
      id
      name
      username
      age
      nationality
      favoriteMovies {
        id
        name
      }
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

const UPDATE_USERNAME = gql`
  mutation UpdateUsername($input: UpdateUsernameInput!) {
    updateUsername(input: $input) {
      id
      username
    }
  }
`;

@Injectable({
  providedIn: "root",
})
export class GraphqlServiceService {
  constructor(private apollo: Apollo) {}

  createUser(input: {
    name: string;
    username: string;
    age: number;
    nationality?: string;
  }): Observable<any> {
    return this.apollo
      .mutate({
        mutation: CREATE_USER,
        variables: {
          input: input,
        },
      })
      .pipe(map((result: any) => result.data.createUser));
  }

  getUsers(): Observable<any> {
    return this.apollo
      .watchQuery({
        query: GET_USERS,
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map((result: any) => result.data.users));
  }

  deleteUser(id: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: DELETE_USER,
        variables: {
          id: id,
        },
      })
      .pipe(map((result: any) => result.data.deleteUser));
  }

  updateUsername(id: string, newUsername: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: UPDATE_USERNAME,
        variables: {
          input: { id, newUsername },
        },
      })
      .pipe(
        map((result: any) => result.data.updateUsername)
      );
  }
}
