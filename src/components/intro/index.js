import React from 'react';

import TypedPrompt from 'components/shared-components/typedPrompt';
import { PromptSubHeader, StyledLink } from 'components/shared-components/style';

export const Intro = () => (
  <React.Fragment>
    <TypedPrompt
      initialText='👋'
      inputText="Hi, I'm Yihwan"
    />
    <PromptSubHeader>
      I'm a software engineer at {' '}
      <StyledLink href="https://curology.com" target="_blank" rel="noreferrer">
        Curology
      </StyledLink>.
    </PromptSubHeader>
  </React.Fragment>
);

export default Intro;