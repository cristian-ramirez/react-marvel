import React from 'react';
import { Container } from 'semantic-ui-react';

import Feed from './Feed';

import './content/style.css';

const Content = () => (
  <Container block="true">
    <Feed />
  </Container>
);

export default Content;
