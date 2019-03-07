import React from 'react';

import StaticPrompt from 'components/shared-components/staticPrompt';
import { PromptContainer, PromptSubHeader, StyledLink } from 'components/shared-components/style';

export const Contact = () => (
  <PromptContainer>
    <StaticPrompt
      text="Contact"
    />
    <PromptSubHeader>
      [
        "<StyledLink href="mailto:hi@yihwan.kim">hi@yihwan.kim</StyledLink>",
        "<StyledLink href="https://www.strava.com/athletes/yihwan" target="_blank" rel="noreferrer">
          Strava
        </StyledLink>",
        "<StyledLink href="https://github.com/Yihwan" target="_blank" rel="noreferrer">
          GitHub
        </StyledLink>",
        "<StyledLink href="https://www.linkedin.com/in/yihwan" target="_blank" rel="noreferrer">
          LinkedIn
        </StyledLink>"
      ]
    </PromptSubHeader>
  </PromptContainer>
);

export default Contact;
