import React from 'react';
import { Prompt } from 'components/shared-components/style';

const StaticPrompt = ({ text }) => (
  <Prompt>
    <span>>{' '}</span>
    <span>{text}</span>
  </Prompt>
);

export default StaticPrompt;
