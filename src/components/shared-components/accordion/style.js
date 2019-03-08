import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { COLORS } from 'constants.js';

export const AccordionContainer = styled.section`
`;

export const BlinkableHeaderContainer = styled.span`
  cursor: pointer;
  background-color: red;

  & span > span:nth-child(2) {
    background-color: ${props => props.blink ? 'rgba(247, 247, 247, 0.65)' : COLORS.darkGrey};
    animation: ${
      props => props.blink ? 'blinker 1.25s steps(1) infinite' : 'none'
    };

    @keyframes blinker {
      50% {
        background-color: transparent;
      }
    }
  }
`;


export const ContentContainer = styled.div`
  color: ${COLORS.almostWhite};
`;
