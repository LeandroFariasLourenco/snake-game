import { css } from 'styled-components';

import pixelfont from '@Assets/Fonts/pixelfont.ttf';

export const fontsFaces = css`
  @font-face {
    font-family: "Orbitron";
    src: url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");
  }

  @font-face {
    font-family: "Pixelfont";
    src: url(${pixelfont});
  }
`;

export default {
  primary: 'Orbitron, sans-serif',
};
