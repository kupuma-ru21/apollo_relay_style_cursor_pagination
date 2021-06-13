import { useQuery } from '@apollo/client';
import { REPOSITORIES } from './graphql';

const App = () => {
  const { data, loading, error } = useQuery(REPOSITORIES, {
    variables: { query: 'front_end_developer' },
  });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>Hello, apollo_relay_style_cursor_pagination</div>;
};

export default App;
