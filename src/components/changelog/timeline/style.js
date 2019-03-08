import styled from '@emotion/styled';
import { MEDIA_QUERIES, COLORS } from 'constants.js';

export const TimelineContainer = styled.section`
  margin-top: 1rem;
`;

export const TimelineItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;


  ${MEDIA_QUERIES.mdUp} {
    padding: 0.5rem 1.25rem;
  }
`;

export const ItemMetaData = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const ItemIcon = styled.div`
`;

export const ItemDate = styled.div`
  margin: 0 3rem 0 2rem;
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
