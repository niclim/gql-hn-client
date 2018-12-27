import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import apolloClient from './apolloClient'

import Home from './pages/Home'

/**
 * Other routes
 * - home (top / new / best)
 * - story
 * - user profile
 * - user submitted
 */

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default App
