import React from 'react';
import StaticPrompt from 'components/shared-components/staticPrompt';
import Accordion from 'components/shared-components/accordion';

const Changelog = () => (
  <Accordion
    header={<StaticPrompt text="Changelog"/>}
    content="content"
  />
);

export default Changelog;
