import { ApolloClient, InMemoryCache } from '@apollo/client';

var URL = `${process.env.WP_BACKEND_URL}/graphql`

const apolloClient = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

export default apolloClient;