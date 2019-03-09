// mocked this amazing design from justinchi.me

import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES } from 'constants.js';

export const TerminalContainerWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA_QUERIES.smUp} {
    background: linear-gradient(45deg, rgba(53, 254, 255, .1), rgba(231, 209, 132, .1));
  }
`;

export const TerminalContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  ${MEDIA_QUERIES.mdUp} {
    max-width: 768px;
    margin: 0 2rem;
    height: 90%;
  }
`;

export const TerminalMenuBar = styled.div`
  display: flex;
  height: 1.75rem;
  background-color: ${COLORS.lightGrey};
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px 10px 0 0;
`;

export const TerminalMenuButton = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  border: 1px solid ${props => props.border};
  border-radius: 50%;
  background-color: ${props => props.background};
  margin-left: 0.5rem;
`;

export const TerminalBody = styled.div`
  height: 100%;
  border-radius: 0 0 4px 4px;
  background-color: ${COLORS.darkGrey};
  font-size: 1rem;
  overflow: scroll;

  box-shadow: 0 50px 100px rgba(65, 65, 74, .2);
  box-shadow: 0 15px 35px rgba(65, 65, 74, .3);
  box-shadow: 0 5px 15px rgba(0,0,0,.2);

  & > section:not(:first-child) {
    margin-top: 2.5rem;
  }

  padding: 2rem 1.5rem;
  ${MEDIA_QUERIES.mdUp} {
    padding: 2.5rem;
  }
`;
