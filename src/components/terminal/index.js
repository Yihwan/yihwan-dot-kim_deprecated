import React from 'react';
import {
  TerminalContainerWrapper,
  TerminalContainer,
  TerminalMenuBar,
  TerminalMenuButton,
  TerminalBody
} from './style';
import { COLORS } from 'constants.js';

const Terminal = ({ children }) => (
  <TerminalContainerWrapper>
    <TerminalContainer>
      <TerminalMenuBar>
        <TerminalMenuButton background={COLORS.bodyRed} border={COLORS.borderRed} />
        <TerminalMenuButton background={COLORS.bodyYellow} border={COLORS.borderYellow} />
        <TerminalMenuButton background={COLORS.bodyGreen} border={COLORS.borderGreen} />
      </TerminalMenuBar>
      <TerminalBody>
        {children}
      </TerminalBody>
    </TerminalContainer>
  </TerminalContainerWrapper>
);

export default Terminal;