import React from 'react';
import Launches from './components/launches';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' });

function App() {
  return (
    <ApolloProvider client={client}>
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
        <Launches></Launches>
      </div>
    </ApolloProvider>
  );
}

export default App;
