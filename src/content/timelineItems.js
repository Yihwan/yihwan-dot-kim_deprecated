import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledLink } from 'components/shared-components/style';

library.add(faEnvelope, faKey);

export const data = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013.06',
    header: 'Graduated college',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013.06',
    header: 'Graduated college',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013.06',
    header: 'Graduated college',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013.06',
    header: 'Graduated college',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013.06',
    header: 'Graduated college',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  },
  {
    id: 6,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013.06',
    header: 'Graduated college',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  },
  {
    id: 7,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013.06',
    header: 'Graduated college',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  },
  {
    id: 8,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: 'Q3 2010',
    header: 'Worked in Quito, Ecuador',
    detail: <span>Partnered with a local children's foundation.</span>,
  },
  {
    id: 9,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: 'Q4 2011',
    header: 'Studied abroad in Santiago, Chile',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  },
  {
    id: 10,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: 'Q3 2012',
    header: 'Worked in São Paulo, Brazil',
    detail: 'B.A. in Political Science Lots of text B.A. in Political Science Lots of text B.A. in Political Science Lots of text',
  }
];
