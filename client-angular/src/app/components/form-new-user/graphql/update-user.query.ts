import { gql } from "apollo-angular";

export const UPDATE_USERNAME = gql`
  mutation UpdateUsername($input: UpdateUsernameInput!) {
    updateUsername(input: $input) {
      id
      username
    }
  }
`;