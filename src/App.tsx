import { useQuery } from '@apollo/client';
import { useCallback } from 'react';
import { REPOSITORIES } from './graphql';
export const PER_PAGE = 5;
export const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: 'フロントエンドエンジニア',
};

const App = () => {
  const { data, loading, error, fetchMore } = useQuery(REPOSITORIES, {
    variables: VARIABLES,
  });
  const nextPage = useCallback(
    (pageInfo) => {
      fetchMore({
        variables: {
          first: null,
          before: null,
          last: 5,
          after: pageInfo.endCursor,
        },
      });
    },
    [fetchMore]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const repositoriesInfo = data.search.edges;
  const pageInfo = data.search.pageInfo;
  return (
    <div>
      <ul>
        {repositoriesInfo.map((repository: any) => {
          const { name } = repository.node;
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <button onClick={() => nextPage(pageInfo)}>nextPage</button>
    </div>
  );
};

export default App;
