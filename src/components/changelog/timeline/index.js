import React from 'react';
import { data } from 'content/timelineItems';

import {
  TimelineContainer,
  TimelineItemContainer,
  ItemMetaData,
  ItemIcon,
  ItemDate,
  ItemHeader,
  ItemDetail,
} from './style';



const TimelineItem = ({ content }) => (
  <TimelineItemContainer>
    <ItemMetaData>
      <ItemIcon>{data.icon}</ItemIcon>
      <ItemDate>{data.date}</ItemDate>
    </ItemMetaData>
    <ItemHeader>{data.header}</ItemHeader>
    <ItemDetail> {data.detail}</ItemDetail>
  </TimelineItemContainer>
)
const Timeline = () => (
  <TimelineContainer>
    <TimelineItem />
  </TimelineContainer>
);

export default Timeline;
