import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import backgroundImage from '@Assets/Images/background.jpg';

import { fontsFaces } from './fonts';

export default createGlobalStyle`
  ${reset};
  ${fontsFaces};

  * {
    box-sizing: border-box;
  }

  body {
    background-image: url(${backgroundImage});
    color: #fff;
    font-family: "Orbitron", sans-serif !important;
    height: 100vh;
    overflow: hidden;
  }

  .full-section {
    width: 100%;
    height: 100%;
  }
`;
