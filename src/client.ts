import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const headersLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: { authorization: `Bearer ${GITHUB_TOKEN}` },
  });
  return forward(operation);
});
const endPoint = 'https://api.github.com/graphql';
const httpLink = new HttpLink({ uri: endPoint });
const link = ApolloLink.from([headersLink, httpLink]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        search: {
          merge(existing, incoming) {
            return { ...existing, ...incoming };
          },
          read(existing) {
            return existing;
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({ link, cache });
