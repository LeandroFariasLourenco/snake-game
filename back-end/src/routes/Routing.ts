import { Application, Request, Response } from 'express';
import { validationResult, body } from 'express-validator';

import PlayersController from '@Controllers/PlayersController';

class Routing {
  app: Application;

  PlayersController = new PlayersController();

  constructor(app: Application) {
    this.app = app;
  }

  init(): void {
    this.app.get('/players', (req: Request, res: Response) => {
      this.PlayersController.getPlayers(res);
    });

    this.app.post('/players',
      body('nickname').isString(),
      body('score').isNumeric(),
      (req: Request, res: Response) => {
        const errors = validationResult(req);
        this.PlayersController.postPlayers(req, res, errors);
      });
  }
}

export default Routing;
