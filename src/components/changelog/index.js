import React from 'react';
import StaticPrompt from 'components/shared-components/staticPrompt';
import Accordion from 'components/shared-components/accordion';
import { PromptContainer, PromptSubHeader } from 'components/shared-components/style';

import Timeline from './timeline/index';

const Changelog = () => (
  <Accordion
    activateBlinker
    header={
      <PromptContainer>
        <StaticPrompt text='Changelog'/>
        <PromptSubHeader>Some highlights from my life.</PromptSubHeader>
      </PromptContainer>
    }
    content={<Timeline key="changelog"/>}
  />
);

export default Changelog;
