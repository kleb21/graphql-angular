import { gql } from "apollo-angular";

export const CREATE_USER = gql`
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