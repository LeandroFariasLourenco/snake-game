import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import backgroundImage from '@Assets/Images/background.jpg';

export default createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "Orbitron";
    src: url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");
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
