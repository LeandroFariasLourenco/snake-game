import React, { useState, useEffect } from 'react';

import * as S from './styled';

const Leaderboards = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers();
  }, []);

  return (
    <S.LeaderboardsWrapper>
      {players.map(({
        id,
        nickname,
        score,
      }) => (
        <S.PlayerInformation
          key={id}
        >
          <S.PlayerNickname>
            {nickname}
          </S.PlayerNickname>
          <S.PlayerScore>
            {score}
          </S.PlayerScore>
        </S.PlayerInformation>
      ))}
    </S.LeaderboardsWrapper>
  );
};

export default Leaderboards;
