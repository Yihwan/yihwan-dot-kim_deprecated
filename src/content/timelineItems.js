import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey);

export const data = {
  icon: <FontAwesomeIcon icon="envelope" />,
date: '2013.06',
  header: 'Graduated college',
  detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
}
