import { Request, Response } from 'express';

import DatabaseConnection from '@Database/DatabaseConnection';
import { PlayerModel } from '@Models/index';

class PlayersController {
  players: Array<PlayerModel> = [];

  request: Request;

  response: Response;

  databaseConnection: DatabaseConnection;

  constructor() {
    this.databaseConnection = new DatabaseConnection(process.env.DATABASE_CONNECTION_URI);
  }

  getPlayers(req: Request, res: Response): Response {
    (async () => this.databaseConnection.connect())();

    this.databaseConnection.getMongoClient().db('Snake-Game');

    this.databaseConnection.close();
    return res.json({
      statusCode: 200,
      body: this.players,
    });
  }

  postPlayers(req: Request, res: Response): void {
    console.log('teste', req);
    console.log('teste', res);
  }
}

export default PlayersController;
