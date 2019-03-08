import React from 'react';
import { data } from 'content/timelineItems';
import Accordion from 'components/shared-components/accordion';

import {
  TimelineContainer,
  TimelineItemContainer,
  ItemMetaData,
  ItemIcon,
  ItemDate,
  ItemText,
  ItemHeader,
  ItemDetail,
} from './style';

const TimelineItem = ({ item, lastIndex }) => (
  <TimelineItemContainer>
    <ItemMetaData>
      <ItemIcon>{item.icon}</ItemIcon>
      <ItemDate>{item.date}</ItemDate>
    </ItemMetaData>
    <ItemText>
      <Accordion
        activateBlinker={item.id === lastIndex}
        header={<ItemHeader><span>{item.header}</span></ItemHeader>}
        content={<ItemDetail> {item.detail}</ItemDetail>}
      />
    </ItemText>
  </TimelineItemContainer>
)

const Timeline = () => {
  const lastIndex = data.length;
  const reversedData = data.sort((a, b) => b.id - a.id);
  return(
    <TimelineContainer>
      {reversedData.map(item => <TimelineItem key={item.id} item={item} lastIndex={lastIndex}/>)}
    </TimelineContainer>
  )
};

export default Timeline;
