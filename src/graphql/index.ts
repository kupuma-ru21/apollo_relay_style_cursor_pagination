import { gql } from '@apollo/client';

export const REPOSITORIES = gql`
  query Repositories(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $query: String!
  ) {
    search(
      first: $first
      after: $after
      last: $last
      before: $before
      query: $query
      type: REPOSITORY
    ) {
      repositoryCount
      # リポジトリ情報
      edges {
        cursor
        node {
          ... on Repository {
            name
          }
        }
      }
      # リポジトリ情報を表示してるページの情報
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
      }
    }
  }
`;
