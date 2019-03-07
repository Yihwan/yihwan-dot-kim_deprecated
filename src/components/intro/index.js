import React from 'react';

import TypedPrompt from 'components/shared-components/typedPrompt';
import { PromptContainer, PromptSubHeader, StyledLink } from 'components/shared-components/style';

export const Intro = () => (
  <PromptContainer>
    <TypedPrompt
      initialText='👋'
      inputText="Hi, I'm Yihwan"
    />
    <PromptSubHeader>
      I'm a software engineer at&nbsp;
      <StyledLink href="https://curology.com" target="_blank" rel="noreferrer">
        Curology
      </StyledLink>.
    </PromptSubHeader>
  </PromptContainer>
);

export default Intro;
