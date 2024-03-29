// Repurposed from https://github.com/vai0/portfolio.

import React from 'react';
import PropTypes from 'prop-types';
import { Prompt, Cursor } from 'components/shared-components/style';

const INITIAL_DELAY = 1500;

class TypedPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '',
    };
  }

  static propTypes = {
    inputText: PropTypes.string.isRequired,
    minTypeSpeed: PropTypes.number,
    maxTypeSpeed: PropTypes.number,
  }

  componentDidMount() {
    this.type({...this.props});
  }


  type = ({ inputText, minTypeSpeed=50, maxTypeSpeed=90 }) => {
    let displayText = '';
    let typeSpeed = 0;

    inputText.split('').forEach(char => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        displayText += char;
        this.setState({ displayText })
      }, INITIAL_DELAY + typeSpeed)
    });
  }

  render() {
    const { initialText } = this.props;

    return(
      <React.Fragment>
        <Prompt>
          >{' '}
          {this.state.displayText || initialText}
        </Prompt>
        <Cursor>&nbsp;</Cursor>
      </React.Fragment>
    );
  }
}

export default TypedPrompt;
