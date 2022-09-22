import React from 'react';
import logo from './logo.svg';
import './App.css';

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
//   from,
// } from "@apollo/client";
// import {onError} from '@apollo/client/link/error'
//
// // const link = from(
// //   errorLink,
// //   new HttpLink({uri:})
// // )
//
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link
// })

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
