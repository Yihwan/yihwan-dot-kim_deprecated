import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faKey);

export const data = {
  icon: <FontAwesomeIcon icon="envelope" />,
  date: '2Q2013',
  header: 'Graduated college',
  detail: 'B.A. in Political Science',
}
