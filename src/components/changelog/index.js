import React from 'react';
import StaticPrompt from 'components/shared-components/staticPrompt';
import Accordion from 'components/shared-components/accordion';

import Timeline from './timeline/index';

const Changelog = () => (
  <Accordion
    header={<StaticPrompt text="Changelog"/>}
    content={<Timeline />}
  />
);

export default Changelog;
