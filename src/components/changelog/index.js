import React from 'react';
import StaticPrompt from 'components/shared-components/staticPrompt';
import Accordion from 'components/shared-components/accordion';
import { PromptContainer, PromptSubHeader } from 'components/shared-components/style';

import Timeline from './timeline/index';

const Changelog = () => (
  <Accordion
    header={
      <PromptContainer>
        <StaticPrompt text="Changelog" subHeader/>
        <PromptSubHeader>asdasd</PromptSubHeader>
      </PromptContainer>
    }
    content={<Timeline />}
  />
);

export default Changelog;
