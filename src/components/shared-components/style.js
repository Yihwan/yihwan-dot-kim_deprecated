import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { COLORS } from 'constants.js';

export const PromptContainer = styled.section`

`;

export const Prompt = styled.span`
  color: ${COLORS.almostWhite};
`;

export const PromptSubHeader = styled.div`
  color: ${COLORS.terminalYellow};
  margin-top: 0.5rem;
`;

export const StyledLink = styled.a`
  color: ${COLORS.terminalCyan};
  text-decoration: none;
`;

export const Cursor = styled.span`
  background: rgba(247, 247, 247, 0.65);
  animation: cursor 1.25s steps(1) infinite;

  @keyframes cursor {
    50% {
      background-color: transparent;
    }
  }
`;
