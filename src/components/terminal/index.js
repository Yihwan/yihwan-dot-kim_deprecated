import React from 'react';
import {
  HiddenButton,
  TerminalContainerWrapper,
  TerminalContainer,
  TerminalMenuBar,
  TerminalMenuButton,
  TerminalBody
} from './style';
import { COLORS } from 'constants.js';

class Terminal extends React.Component {
  state = {
    isClosed: false,
    isMinimized: false,
  }

  minimize = () => this.setState({ isMinimized: true });
  maximize = () => this.setState({ isMinimized: false });
  close = () => this.setState({ isClosed: true });
  open = () => {
    this.setState({ isClosed: false })
    this.setState({ isMinimized: false })
  };

  render() {
    const { isMinimized, isClosed } = this.state;
    const { children } = this.props;

    return(
      <TerminalContainerWrapper>
        <HiddenButton
          isClosed={isClosed}
          onClick={this.open}>
          🤔
        </HiddenButton>
        <TerminalContainer isClosed={isClosed}>
          <TerminalMenuBar>
            <TerminalMenuButton
              background={COLORS.bodyRed}
              border={COLORS.borderRed}
              onClick={this.close}
            />
            <TerminalMenuButton
              background={COLORS.bodyYellow}
              border={COLORS.borderYellow}
              onClick={this.minimize}
            />
            <TerminalMenuButton
              background={COLORS.bodyGreen}
              border={COLORS.borderGreen}
              onClick={this.maximize}
            />
          </TerminalMenuBar>
          <TerminalBody isMinimized={isMinimized}>
            {children}
          </TerminalBody>
        </TerminalContainer>
      </TerminalContainerWrapper>
    )
  }
}

export default Terminal;
