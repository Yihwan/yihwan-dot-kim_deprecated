import React from 'react';
import { PromptContainer } from 'components/shared-components/style';

const StaticPrompt = ({ text }) => (
  <PromptContainer>
    >{' '}
    {text}
  </PromptContainer>
);

export default StaticPrompt;