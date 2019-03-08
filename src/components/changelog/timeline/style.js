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
  }
`;

export const ItemMetaData = styled.div`
  margin-top: 1.5rem;
  display: flex;
  color: ${COLORS.lightGrey};
`;

export const ItemIcon = styled.div`
`;

export const ItemDate = styled.div`
  margin: 0 1rem;

  ${MEDIA_QUERIES.smUp} {
    margin: 0 2rem;
  }
`;

export const ItemText = styled.div`
  ${MEDIA_QUERIES.mdUp} {
    margin-left: 4rem;
  }
`;

export const ItemHeader = styled.div`
  color: ${COLORS.terminalYellow};
  margin-top: 0.75rem;

  ${MEDIA_QUERIES.smUp} {
    margin-top: 1.5rem;
  }
`;

export const ItemDetail = styled.div`
  margin-top: 0.5rem;
`;
