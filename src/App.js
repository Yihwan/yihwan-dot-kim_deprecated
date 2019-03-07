import React, { Component } from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from 'constants.js';

import Terminal from 'components/terminal';
import Intro from 'components/intro';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={globalStyles}/>
        <Terminal>
          <Intro />
        </Terminal>
      </React.Fragment>
    );
  }
}

export default App;
