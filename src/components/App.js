import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import Content from './containers/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container textAlign="center" fluid>
        <Header />
        <Content />
      </Container>
    );
  }
}

export default App;
