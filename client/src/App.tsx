import React from 'react';
import Launches from './components/launches';
import LaunchDetails from './components/launch';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from './components/logo';
import { Link } from 'react-router-dom';

import './App.css';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <div className="logo">
            <Link to={`/`}>
              <Logo></Logo>
            </Link>
          </div>
          <Route exact path="/" component={Launches}></Route>
          <Route
            exact
            path="/launch/:flightNumber"
            component={LaunchDetails}
          ></Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
