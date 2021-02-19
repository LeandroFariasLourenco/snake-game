import { PlayerModel } from '@Models/index';
import { PlayersResponse } from '@Types/index';

interface IPlayersController {
  players: Array<PlayerModel>,
  response: PlayersResponse
}

export default IPlayersController;
