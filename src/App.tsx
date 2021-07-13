import { useCallback } from 'react';
import { useRepositoriesQuery } from './graphql/generate';
export const PER_PAGE = 5;
export const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: 'apollo graphql test',
};

const App = () => {
  const { data, loading, error, fetchMore } = useRepositoriesQuery({
    variables: VARIABLES,
  });
  const nextPage = useCallback(
    (pageInfo) => {
      fetchMore({
        variables: {
          first: 5,
          after: pageInfo.endCursor,
          last: null,
          before: null,
        },
      });
    },
    [fetchMore]
  );
  const prevPage = useCallback(
    (pageInfo) => {
      fetchMore({
        variables: {
          first: null,
          after: null,
          last: 5,
          before: pageInfo.startCursor,
        },
      });
    },
    [fetchMore]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const repositoriesInfo = data?.search.edges;
  const pageInfo = data?.search.pageInfo;
  return (
    <div>
      <ul>
        {repositoriesInfo?.map((repository: any) => {
          const { name } = repository.node;
          return <li key={name}>{name}</li>;
        })}
      </ul>
      {pageInfo?.hasPreviousPage && (
        <button onClick={() => prevPage(pageInfo)}>prevPage</button>
      )}
      {pageInfo?.hasNextPage && (
        <button onClick={() => nextPage(pageInfo)}>nextPage</button>
      )}
    </div>
  );
};

export default App;
