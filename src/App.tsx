import { useQuery } from '@apollo/client';
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
  const { data, loading, error } = useQuery(REPOSITORIES, {
    variables: VARIABLES,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const repositoriesInfo = data.search.edges;
  return (
    <ul>
      {repositoriesInfo.map((repository: any) => {
        const { name } = repository.node;
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
};

export default App;
