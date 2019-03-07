import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES } from 'constants.js';

export const TerminalContainerWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TerminalContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  ${MEDIA_QUERIES.mdUp} {
    max-width: 992px;
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

  box-shadow: 0 50px 100px rgba(65, 65, 74, .2);
  box-shadow: 0 15px 35px rgba(65, 65, 74, .3);
  box-shadow: 0 5px 15px rgba(0,0,0,.2);
`;