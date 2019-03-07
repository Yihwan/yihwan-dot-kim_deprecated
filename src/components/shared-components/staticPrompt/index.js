import React from 'react';
import { Prompt } from 'components/shared-components/style';

const StaticPrompt = ({ text }) => (
  <Prompt>
    >{' '}
    {text}
  </Prompt>
);

export default StaticPrompt;
