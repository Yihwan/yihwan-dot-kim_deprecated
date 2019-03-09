import { css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

export const COLORS = {
  'almostWhite': '#f7f7f7',
  'lightGrey': '#e4e3e5',
  'darkGrey': '#1B1B1D',
  'bodyRed': '#f96256',
  'bodyYellow': '#fdbc3d',
  'bodyGreen': '#33c948',
  'borderRed': '#f65549',
  'borderYellow': '#ffb524',
  'borderGreen': '#2dbb41',
  'terminalYellow': '#e7d184',
  'terminalCyan': '#35feff',
  'iconGreen': '#92eac0',
  'iconRed': '#ea9292',
  'iconBlue': '#92bcea',

}

export const MEDIA_QUERIES = {
  'xsUp': '@media (min-width: 330px)',
  'smUp': '@media (min-width: 576px)',
  'mdUp': '@media (min-width: 768px)',
  'lgUp': '@media (min-width: 992px)',
}


export const globalStyles = css`
  ${emotionNormalize}
  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    min-height: 100%;
    font-family: Monaco, Consolas, monospace;
  }

  .accordion-enter {
    opacity: 0.01;
  }

  .accordion-enter.accordion-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .accordion-leave {
    opacity: 1;
  }

  .accordion-leave.accordion-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;
