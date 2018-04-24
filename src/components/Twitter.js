import React from 'react';
import './twitter/style.css';

class Content extends React.Component {
  componentWillMount() {
    twttr.widgets && twttr.widgets.load(); // eslint-disable-line
  }

  render() {
    return (
      <div className="twitter-grid">
        <a
          className="twitter-timeline"
          data-width="800"
          data-height="800"
          data-dnt="true"
          data-partner="tweetdeck"
          data-theme="dark"
          data-link-color="#2B7BB9"
          href="https://twitter.com/Marvel?ref_src=twsrc%5Etfw"
        >
          Tweets by Marvel
        </a>
      </div>
    );
  }
}

export default Content;
