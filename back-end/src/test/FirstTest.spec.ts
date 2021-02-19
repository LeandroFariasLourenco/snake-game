import { PlayerModel } from '../models/index';

test('it should be ok', () => {
  const Player = new PlayerModel();

  Player.nickname = 'Leandro';
  expect(Player.nickname).toEqual('Leandro');

  Player.score = 300;
  expect(Player.score).toEqual(300);
});
