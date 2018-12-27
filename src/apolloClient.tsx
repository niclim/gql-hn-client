import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  // Update for non-dev mode
  uri: '/gql' // will hit proxy localhost:4000
})

export default client
