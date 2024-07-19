import { gql } from "apollo-angular";

export const GET_USERS = gql`
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