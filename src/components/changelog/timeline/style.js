import styled from '@emotion/styled';
import { MEDIA_QUERIES, COLORS } from 'constants.js';

export const TimelineContainer = styled.section`
  margin-top: 1rem;
`;

export const TimelineItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${MEDIA_QUERIES.smUp} {
    flex-direction: row;
    padding: 0.5rem 0;
  }
`;

export const ItemMetaData = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const ItemIcon = styled.div`
`;

export const ItemDate = styled.div`
  margin: 0 2rem;
`;

export const ItemText = styled.div`
  margin-top: 0.5rem;
  ${MEDIA_QUERIES.mdUp} {
    margin-left: 4rem;
  }
`;

export const ItemHeader = styled.div`
`;

export const ItemDetail = styled.div`
`;
