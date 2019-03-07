import styled from '@emotion/styled';
import { COLORS } from 'constants.js';

export const HeaderContainer = styled.div`
  cursor: pointer;

  background-color: ${props => props.blink ? 'red' : 'blue'}; 
`;

export const ContentContainer = styled.div`
  color: ${COLORS.almostWhite};
`;
