import React from 'react';

import StaticPrompt from 'components/shared-components/staticPrompt';
import { PromptContainer } from 'components/shared-components/style';

export const Placeholder = () => (
  <PromptContainer>
    <StaticPrompt
      text="This page is under construction ... come back soon!"
    />
  </PromptContainer>
);

export default Placeholder;
