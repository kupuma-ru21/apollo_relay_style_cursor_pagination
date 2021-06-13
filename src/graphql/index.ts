import { gql } from '@apollo/client';

export const REPOSITORIES = gql`
  query Repositories($query: String!) {
    search(query: $query, type: REPOSITORY) {
      repositoryCount
    }
  }
`;
