import { PlayerModel } from '@Models/index';

interface IPlayerResponse {
  statusCode: number,
  body: interface<PlayerModel>
}

export default IPlayerResponse;
