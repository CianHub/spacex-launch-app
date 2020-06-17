import React from 'react';
import Launches from './components/launches';
import Launch from './components/launch';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import logo from './logo.png';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX Logo"
            style={{
              width: 150,
              height: 100,
              margin: 'auto 0',
              filter: 'brightness(0) invert(1)',
            }}
          />
          <Route exact path="/" component={Launches}></Route>
          <Route exact path="/launch/:flightNumber" component={Launch}></Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
