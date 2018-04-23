import React from 'react';
import { Header, Image, Container } from 'semantic-ui-react';

import groot from './header/groot.svg';
import './header/style.css';

const TopBar = () => (
  <Container block="true">
    <Image circular src={groot} verticalAlign="middle" size="small" />
    <Header as="h1" dividing="true">
      <span className="header-logo">Marvel</span>
      <Header.Subheader>
        <span className="sub-header-logo">React Redux</span>
      </Header.Subheader>
    </Header>
  </Container>
);

export default TopBar;
