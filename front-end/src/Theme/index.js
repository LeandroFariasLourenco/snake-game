import { generateMedia } from 'styled-media-query';

import generateIndex from './generateZindex';
import colors from './colors';
import mediaQuery from './media';
import fonts from './fonts';

import * as mixins from './mixins';

const zIndexes = generateIndex();

const mq = generateMedia(mediaQuery);

const theme = {
  ...mediaQuery,
  zIndexes,
  mixins,
  colors,
  fonts,
  mq,
};

export default theme;
