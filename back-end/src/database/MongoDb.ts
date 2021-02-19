import { Collection, MongoClient } from 'mongodb';

import { IMongoDb } from '@Interfaces/index';

class MongoDb implements IMongoDb {
  client: Promise<MongoClient>;

  collection: Collection;

  async getClient(): Promise<MongoClient> {
    return this.client;
  }

  constructor(
    database: string,
    collection: string,
  ) {
    this.client = MongoClient.connect(process.env.DATABASE_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    (async () => {
      this.collection = (await this.client).db(database).collection(collection);
    })();
  }
}

export default MongoDb;
