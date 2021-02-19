import { Result, ValidationError } from 'express-validator';

import { PlayerModel } from '@Models/index';

type PlayersResponse = {
  body: Array<PlayerModel> | Record<string, unknown> | Result<ValidationError>,
}

export default PlayersResponse;
