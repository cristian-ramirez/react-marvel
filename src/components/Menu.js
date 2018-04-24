import React from 'react';
import { Container } from 'semantic-ui-react';

import './menu/style.css';

class Menu extends React.Component {
  items = ['characters', 'comics', 'series'];
  render() {
    return (
      <Container fluid>
        <div className="ui three item menu">
          {this.items.map(item => (
            <a key={item} className="item">
              {item}
            </a>
          ))}
        </div>
      </Container>
    );
  }
}

export default Menu;
