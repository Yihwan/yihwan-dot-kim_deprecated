import React from 'react';
import {
  faBabyCarriage,
  faPlaneDeparture,
  faGlobeEurope,
  faTree,
  faPizzaSlice,
  faHandHoldingHeart,
  faSwimmer,
  faBicycle,
  faAnchor,
  faUniversity,
  faHandsHelping,
  faUserTie,
  faHiking,
  faCloudSun,
  faMountain,
  faGem,
  faGraduationCap,
  faMedal,
  faDiagnoses,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledLink } from 'components/shared-components/style';

export const data = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faBabyCarriage} />,
    date: '1991 Q3',
    header: 'Was born',
    detail: 'In sunny Los Angeles. Say what you want, but we have the best food.',
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faPlaneDeparture} />,
    date: '2006 Q2',
    header: 'Boarded a flight for the first time',
    detail: "It was an AA flight out of LAX, and they served plasticized ham and cheese sandwiches. But it was magical all the same.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faGlobeEurope} />,
    date: '2006 Q3',
    header: 'Left the country for the first time',
    detail: '- on a whirlwind, hyper-supervised bus tour of Europe. 3/10 would recommend to a friend.',
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faTree} />,
    date: '2009 Q3',
    header: 'Moved to Stanford',
    detail: "Got off the Caltrain and walked the wrong way down University Ave for a good five blocks.",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    date: '2010 Q3',
    header: 'Volunteered in Quito, Ecuador',
    detail: "Partnered with a local children’s foundation. Also, ate way too many deep-fried, burrito-sized, dollar-a-piece empanadas.",
  },
  {
    id: 6,
    icon: <FontAwesomeIcon icon={faMountain} />,
    date: '2011 Q4',
    header: 'Studied abroad in Santiago, Chile',
    detail: 'Discovered avocado toast before it was cool. Also, climbed mountains and spoke Spanish. Did some studying too.',
  },
  {
    id: 7,
    icon: <FontAwesomeIcon icon={faHandsHelping} />,
    date: '2012 Q3',
    header: 'Worked in São Paulo, Brazil',
    detail: 'Funded and advised social enterprises. Tried to learn Brazilian Portuguese, but settled with Portuñol.',
  },
  {
    id: 8,
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    date: '2013 Q2',
    header: 'Got a B.A. in Political Science',
    detail: 'Thought I was going to law school, but realized I did not want to be a lawyer. Therefore, I did not go to law school.',
  },
  {
    id: 9,
    icon: <FontAwesomeIcon icon={faCloudSun} />,
    date: '2013 Q2',
    header: 'Moved to San Francisco',
    detail: "Lucked out with a place two blocks south of the Lyon Street steps. If you haven't been, you should check it out.",
  },
  {
    id: 10,
    icon: <FontAwesomeIcon icon={faUserTie} />,
    date: '2013 Q2',
    header: 'Joined management consulting',
    detail: 'Opened my first dataset that crashed Excel. Got really good at deck-making and bag-packing.',
  },
  {
    id: 11,
    icon: <FontAwesomeIcon icon={faPizzaSlice} />,
    date: '2014 Q2',
    header: 'Moved to New York City',
    detail: "Something about living there in your early 20s. Cliche, but true.",
  },
  {
    id: 12,
    icon: <FontAwesomeIcon icon={faGem} />,
    date: '2014 Q3',
    header: 'Joined Matter',
    detail: "It's true what they say: a day at an early-stage startup is a month anywhere else.",
  },
  {
    id: 13,
    icon: <FontAwesomeIcon icon={faMedal} />,
    date: '2016 Q3',
    header: 'Ran a marathon',
    detail: "Glad I did it, but might stick with 21ks ... unless I draw into NYC? Math says the chances of getting in versus not getting in seven times are equal, so we'll see (0/3 so far).",
  },
  {
    id: 14,
    icon: <FontAwesomeIcon icon={faHiking} />,
    date: '2016 Q3',
    header: 'Traveled around for a bit',
    detail: "After a startup exit, I wasn't sure what to do next. So I stalled by wandering around Europe and Asia.",
  },
  {
    id: 15,
    icon: <FontAwesomeIcon icon={faAnchor} />,
    date: '2017 Q1',
    header: 'Moved back to the Bay Area',
    detail: "- Menlo Park, to be exact. After the chaos of New York, it was actually quite nice. Then I got bored and moved back to San Francisco.",
  },
  {
    id: 16,
    icon: <FontAwesomeIcon icon={faSwimmer} />,
    date: '2017 Q1',
    header: 'Learned how to (actually) swim',
    detail: 'Realized you have to slow down to go faster. There’s a shower thought in there somewhere.',
  },
  {
    id: 17,
    icon: <FontAwesomeIcon icon={faUniversity} />,
    date: '2017 Q1',
    header: 'Joined Argive',
    detail: 'Doubled down on software development after dabbling for a while. Dealt with government regulations, so I had plenty of (unstructured and confusing) data to work with.',
  },
  {
    id: 18,
    icon: <FontAwesomeIcon icon={faBicycle} />,
    date: '2018 Q4',
    header: 'Got a bike with gears',
    detail: 'Still have my trusty one-speed commuter, but decided to upgrade for longer rides. Unfortunately the upgrade also came with spandex shorts.',
  },
  {
    id: 19,
    icon: <FontAwesomeIcon icon={faDiagnoses} />,
    date: '2018 Q4',
    header: 'Joined Curology',
    detail: <span>We’re <StyledLink href="https://curology.com/careers" target="_blank" rel="noopener noreferrer">hiring</StyledLink> like crazy. In my first three months, the company went from 100 to 250+ employees. Feel free to reach out to learn more.</span>,
  },
];
