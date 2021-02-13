import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSelector } from 'react-redux';

import { movementKeys } from '@Resources/index';

import * as S from './styled';

const renderKeys = ({
  id,
  command,
  type,
  key,
}, currentType, currentPressedKey) => currentType === type && (
  <S.KeyContent
    key={id}
    className={cx({ 'is--active': currentPressedKey === key })}
  >
    {command}
  </S.KeyContent>
);

const Information = () => {
  const { currentPressedKey, paused } = useSelector((state) => state.game);

  return (
    <S.InformationWrapper>
      <S.InformationText>
        Welcome to Snake Game! Here you can play the game,
        save your highscore and compete in the leaderboards
        with your friends!
      </S.InformationText>
      <S.InformationText>
        But be careful, the map is riddled with challenges
        and the map gets smallers as you play.
      </S.InformationText>
      <S.InformationText>
        You can use both the arrows or wasd to move the snake
      </S.InformationText>

      <S.KeyWrapper>
        <S.KeyTypeWrapper>
          {movementKeys.map((key) => renderKeys(key, 'letter', currentPressedKey))}
        </S.KeyTypeWrapper>
        <S.KeyTypeWrapper>
          {movementKeys.map((key) => renderKeys(key, 'arrow', currentPressedKey))}
        </S.KeyTypeWrapper>
      </S.KeyWrapper>

      <S.InformationText>
        It is also possible to pause the game by pressing space
      </S.InformationText>
      <S.SpaceKey
        className={cx({ 'is--active': paused })}
      />

    </S.InformationWrapper>
  );
};

renderKeys.propTypes = {
  id: PropTypes.string.isRequired,
  command: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Information;
