import React, { Component } from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from 'constants.js';

import Terminal from 'components/terminal';
import Intro from 'components/intro';
import Changelog from 'components/changelog';
import Contact from 'components/contact';
import Placeholder from 'components/placeholder';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={globalStyles}/>
        <Terminal>
          <Intro />
          <Changelog />
          <Contact />
        </Terminal>
      </React.Fragment>
    );
  }
}

export default App;
