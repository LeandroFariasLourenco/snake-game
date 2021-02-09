import React from 'react';
import { useHistory } from 'react-router-dom';

import mainMenu from '@Resources/mainmenu';

import * as S from './styled';

const MainMenu = () => {
  const history = useHistory();

  const handleClick = (link) => {
    history.push(link);
  };

  return (
    <S.MainMenuWrapper>
      <S.MainMenuTitle>
        Snake Game
      </S.MainMenuTitle>
      {mainMenu.map(({
        id,
        title,
        link,
      }) => (
        <S.OptionWrapper
          key={id}
        >
          <S.OptionButton
            onClick={() => handleClick(link)}
            gameButton
          >
            {title}
          </S.OptionButton>
        </S.OptionWrapper>
      ))}
    </S.MainMenuWrapper>
  );
};

export default MainMenu;
