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

const TimelineItem = ({ item }) => (
  <TimelineItemContainer>
    <ItemMetaData>
      <ItemIcon color={item.iconColor}>{item.icon}</ItemIcon>
      <ItemDate>{item.date}</ItemDate>
    </ItemMetaData>
    <ItemText>
      <Accordion
        activateBlinker={item.id === 1}
        header={<ItemHeader>{item.header}</ItemHeader>}
        content={<ItemDetail> {item.detail}</ItemDetail>}
      />
    </ItemText>
  </TimelineItemContainer>
)
const Timeline = () => (
  <TimelineContainer>
    {data.map(item => <TimelineItem key={item.id} item={item}/>)}
  </TimelineContainer>
);

export default Timeline;
