import React from 'react';
import { Container } from 'semantic-ui-react';

import Feed from './Feed';
import Menu from '../components/Menu';

import './content/style.css';

const Content = () => (
  <Container block="true">
    <Menu />
    <Feed />
  </Container>
);

export default Content;
