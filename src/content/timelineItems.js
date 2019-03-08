import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COLORS } from 'constants.js';

library.add(faEnvelope, faKey);

export const data = [{
  icon: <FontAwesomeIcon icon="envelope" />,
  iconColor: COLORS.terminalCyan,
  date: '2013.06',
  header: 'Graduated college',
  detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
}, {
  icon: <FontAwesomeIcon icon="envelope" />,
  iconColor: COLORS.terminalCyan,
  date: '2013.06',
  header: 'Graduated college',
  detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
}];
