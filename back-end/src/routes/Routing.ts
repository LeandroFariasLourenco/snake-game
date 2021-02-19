import { Application } from 'express';

import PlayersController from '@Controllers/PlayersController';

class Routing {
  app: Application;

  PlayersController = new PlayersController();

  constructor(app: Application) {
    this.app = app;
  }

  init(): void {
    this.app.get('/players', (req, res) => {
      this.PlayersController.getPlayers(req, res);
    });
    this.app.post('/players', this.PlayersController.postPlayers);
  }
}

export default Routing;
