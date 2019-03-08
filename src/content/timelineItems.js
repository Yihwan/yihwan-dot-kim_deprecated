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
    date: '1991 Q3',
    header: 'Was born',
    detail: 'In sunny Los Angeles. Say what you want, but have the best food.',
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '1991 Q3',
    header: 'Boarded a flight for the first time',
    detail: "- for my sister's graduation in Boston. It was an AA flight out of LAX, and they served plasticized ham and cheese sandwiches. But it was magical all the same.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2006 Q3',
    header: 'Left country for the first time',
    detail: '- on a whirlwind, hyper-supervised bus tour of Europe. 3/10 would recommend to a friend.',
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2009 Q3',
    header: 'Moved to Stanford',
    detail: "I distinctly remember getting off the Caltrain and walking the wrong way down University Ave for a good five blocks. Not the best start to college.",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2010 Q3',
    header: 'Volunteered in Quito, Ecuador',
    detail: <span>Partnered up with a local children's foundation. Also, bought way too many burrito-sized, deep-fried empanadas for $1 each.</span>,
  },
  {
    id: 6,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2011 Q4',
    header: 'Studied abroad in Santiago, Chile',
    detail: 'Discovered avocado toast before it was cool. Also, climbed mountains and spoke Spanish. Some studying too.',
  },
  {
    id: 7,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2012 Q3',
    header: 'Worked in São Paulo, Brazil',
    detail: 'Funded and advised social enterprises. Tried to learn Brazilian Portuguese, but settled with Portuñol.',
  },
  {
    id: 8,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013 Q2',
    header: 'Got a B.A. in Political Science',
    detail: 'Thought I was going to law school, but realized I did not want to be a lawyer. Therefore, I did not go to law school.',
  },
  {
    id: 9,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013 Q2',
    header: 'Moved to San Francisco',
    detail: "Lucked out with a place two blocks south of the Lyon Street steps. If you haven't been, you should.",
  },
  {
    id: 10,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2013 Q2',
    header: 'Joined management consulting',
    detail: 'Learned datasets can crash Excel. Got really good at deck-making and bag-packing.',
  },
  {
    id: 11,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2014 Q2',
    header: 'Moved to New York City',
    detail: ', and drove across the country.',
  },
  {
    id: 12,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2014 Q3',
    header: 'Joined an early-stage startup',
    detail: "Thought people were exaggerating when they said a month at a startup was a year elsewhere. They weren't.",
  },
  {
    id: 13,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2016 Q3',
    header: 'Ran a marathon',
    detail: "Glad I did it, but might stick with 21ks. Unless I get into NYC?",
  },
  {
    id: 14,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2016 Q3',
    header: 'Traveled around for a bit',
    detail: "After a startup exit, I wasn't sure what was next. So I stalled by wandering around Europe and Asia.",
  },
  {
    id: 15,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2017 Q1',
    header: 'Moved back to the Bay Area',
    detail: "Menlo Park, to be exact. After the chaos of living in New York, it was actually really nice. Then I got bored and moved back to San Francisco.",
  },
  {
    id: 16,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2017 Q1',
    header: 'Learned how to (actually) swim',
    detail: "Text .",
  },
  {
    id: 17,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2017 Q1',
    header: 'Joined Argive',
    detail: "Menlo Park, to be exact. After the chaos of living in New York, it was actually really nice. Then I got bored and moved back to San Francisco.",
  },
  {
    id: 18,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2018 Q3',
    header: 'Got a bike with gears',
    detail: "Menlo Park, to be exact. After the chaos of living in New York, it was actually really nice. Then I got bored and moved back to San Francisco.",
  },
  {
    id: 19,
    icon: <FontAwesomeIcon icon="envelope" />,
    date: '2018 Q4',
    header: 'Joined Curology',
    detail: "Menlo Park, to be exact. After the chaos of living in New York, it was actually really nice. Then I got bored and moved back to San Francisco.",
  },
];
