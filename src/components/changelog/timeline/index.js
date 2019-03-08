import React from 'react';
import { data } from 'content/timelineItems';

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



const TimelineItem = ({ content }) => (
  <TimelineItemContainer>
    <ItemMetaData>
      <ItemIcon>{data.icon}</ItemIcon>
      <ItemDate>{data.date}</ItemDate>
    </ItemMetaData>
    <ItemText>
      <ItemHeader>{data.header}</ItemHeader>
      <ItemDetail> {data.detail}</ItemDetail>
    </ItemText>
  </TimelineItemContainer>
)
const Timeline = () => (
  <TimelineContainer>
    <TimelineItem />
  </TimelineContainer>
);

export default Timeline;
