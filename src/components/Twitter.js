import React from 'react';
import './twitter/style.css';

class Content extends React.Component {
  componentWillMount() {
    twttr.widgets && twttr.widgets.load(); // eslint-disable-line
  }

  render() {
    /* eslint-disable */
    return (
      <div className="twitter-grid">
        <a
          className="twitter-grid"
          href="https://twitter.com/Marvel/timelines/784088993076043777"
        />
      </div>
    );
    /* eslint-enable */
  }
}

export default Content;
