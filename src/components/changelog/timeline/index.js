import React from 'react';
import {
  TimelineContainer,
  TimelineItemContainer,
  ItemMetaData,
  ItemHeader,
  ItemDetail,
} from './style';

const TimelineItem = ({ content }) => (
  <TimelineItemContainer>
    <ItemMetaData />
    <ItemHeader>Header</ItemHeader>
    <ItemDetail>Item detail</ItemDetail>
  </TimelineItemContainer>
)
const Timeline = () => (
  <TimelineContainer>
    <TimelineItem />
  </TimelineContainer>
);

export default Timeline;
