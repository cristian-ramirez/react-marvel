import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container textAlign="center" fluid>
        <Header />
      </Container>
    );
  }
}

export default App;
