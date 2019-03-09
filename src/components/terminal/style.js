// mocked this amazing design from justinchi.me

import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES } from 'constants.js';

export const HiddenButton = styled.button`
  visibility: hidden;
  ${props => props.isClosed && 'visibility: visible;'};
  font-size: 2rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;

  position: fixed;
  margin-top: -16px;
  margin-left: -18px;
  top: 50%;
  left: 50%;
  z-index: 1;
`;

export const TerminalContainerWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA_QUERIES.smUp} {
    background: linear-gradient(45deg, rgba(53, 254, 255, .15), rgba(231, 209, 132, .15));
  }
`;

export const TerminalContainer = styled.div`
position: relative;
z-index: 2;
  ${props => props.isClosed && 'visibility: hidden;'};
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

  cursor: pointer;
`;

export const TerminalBody = styled.div`
  ${props => props.isMinimized && 'visibility: hidden;'};
  height: 100%;
  border-radius: 0 0 4px 4px;
  background-color: ${COLORS.darkGrey};
  font-size: 1rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

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
