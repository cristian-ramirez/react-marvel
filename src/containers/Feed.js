import React from 'react';
import { Container } from 'semantic-ui-react';

import Twitter from '../components/Twitter';

import './feed/style.scss';

const Content = () => (
  <Container block="true">
    <Twitter />
  </Container>
);

export default Content;
