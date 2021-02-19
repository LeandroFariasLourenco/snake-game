import { config } from 'dotenv';
import express, { Application, json } from 'express';

import Routing from '@Routes/Routing';

config();

const app: Application = express();
app.use(json());

const port = process.env.PORT;

const Routes: Routing = new Routing(app);
Routes.init();

app.listen(port);
