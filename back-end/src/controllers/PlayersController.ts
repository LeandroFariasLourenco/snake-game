import { Response } from 'express';
// import { Result, ValidationError } from 'express-validator';

import MongoDb from '@Database/MongoDb';
import { IPlayersController } from '@Interfaces/index';
// import { PlayerModel } from '@Models/index';

class PlayersController implements IPlayersController {
  players = [];

  response = {
    body: {},
  };

  async getPlayers(res: Response): Promise<Response> {
    const Mongo = new MongoDb('snake-game', 'players');
    // const client = await Mongo.getClient();
    // try {
    //   const players = await Mongo.collection.find({}).toArray();
    //   this.players = [...players];

    //   res.statusCode = 200;
    //   this.response.body = this.players;

    //   client.close();
    //   return res.json(this.response);
    // } catch (e) {
    //   client.close();
    //   res.statusCode = 500;
    //   this.response.body = {
    //     message: 'Ocorreu um erro interno no servidor',
    //   };
    //   return res.json(this.response);
    // }
  }

  // async postPlayers(
  //   req: Request,
  //   res: Response,
  //   errors: Array<Result<ValidationError>>,
  // ): Promise<Response> {
  //   if (errors.length) {
  //     res.statusCode = 400;
  //     return res.json({
  //       body: errors,
  //     });
  //   }

  //   const Mongo = new MongoDb('snake-game', 'players');
  //   const client = await Mongo.getClient();

  //   try {
  //     const document: PlayerModel = {
  //       nickname: req.body.nickname,
  //       score: req.body.score,
  //     };
  //     const result = await Mongo.collection.insertOne(document);

  //     client.close();
  //     res.statusCode = 200;

  //     return res.json({
  //       body: result,
  //     });
  //   } catch (e) {
  //     res.statusCode = 500;
  //     this.response.body = {
  //       message: 'Ocorreu um erro interno no servidor',
  //     };

  //     client.close();
  //     return res.json(this.response);
  //   }
  // }
}

export default PlayersController;
