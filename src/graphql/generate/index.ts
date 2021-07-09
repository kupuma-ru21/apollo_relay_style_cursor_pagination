import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  search: SearchResultItemConnection;
};


export type QuerySearchArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  type: SearchType;
};

export type Repository = {
  name: Scalars['String'];
};

export type SearchResultItem = Repository & {
  __typename?: 'SearchResultItem';
  name: Scalars['String'];
};

export type SearchResultItemConnection = {
  __typename?: 'SearchResultItemConnection';
  repositoryCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<SearchResultItemEdge>>>;
  pageInfo: PageInfo;
};

export type SearchResultItemEdge = {
  __typename?: 'SearchResultItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<SearchResultItem>;
};

export enum SearchType {
  Repository = 'REPOSITORY'
}

export type RepositoriesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  query: Scalars['String'];
}>;


export type RepositoriesQuery = (
  { __typename?: 'Query' }
  & { search: (
    { __typename?: 'SearchResultItemConnection' }
    & Pick<SearchResultItemConnection, 'repositoryCount'>
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'SearchResultItemEdge' }
      & Pick<SearchResultItemEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'SearchResultItem' }
        & Pick<SearchResultItem, 'name'>
      )> }
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage' | 'startCursor' | 'hasPreviousPage'>
    ) }
  ) }
);


export const RepositoriesDocument = gql`
    query Repositories($first: Int, $after: String, $last: Int, $before: String, $query: String!) {
  search(
    first: $first
    after: $after
    last: $last
    before: $before
    query: $query
    type: REPOSITORY
  ) {
    repositoryCount
    edges {
      cursor
      node {
        ... on Repository {
          name
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useRepositoriesQuery__
 *
 * To run a query within a React component, call `useRepositoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRepositoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRepositoriesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useRepositoriesQuery(baseOptions: Apollo.QueryHookOptions<RepositoriesQuery, RepositoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, options);
      }
export function useRepositoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RepositoriesQuery, RepositoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RepositoriesQuery, RepositoriesQueryVariables>(RepositoriesDocument, options);
        }
export type RepositoriesQueryHookResult = ReturnType<typeof useRepositoriesQuery>;
export type RepositoriesLazyQueryHookResult = ReturnType<typeof useRepositoriesLazyQuery>;
export type RepositoriesQueryResult = Apollo.QueryResult<RepositoriesQuery, RepositoriesQueryVariables>;