import styled from '@emotion/styled';
import { MEDIA_QUERIES } from 'constants.js';

export const TimelineContainer = styled.section`
  margin-top: 1rem;
`;

export const TimelineItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1.5rem;

  ${MEDIA_QUERIES.smUp} {
    flex-direction: row;
  }
`;

export const ItemMetaData = styled.div`
  display: flex;
`;

export const ItemIcon = styled.div`
  color: ${props => props.color};
`;

export const ItemDate = styled.div`
  margin: 0 2rem;
`;

export const ItemText = styled.div`
  ${MEDIA_QUERIES.mdUp} {
    margin-left: 4rem;
  }
`;

export const ItemHeader = styled.div`
`;

export const ItemDetail = styled.div`
  margin-top: 0.5rem;
`;
