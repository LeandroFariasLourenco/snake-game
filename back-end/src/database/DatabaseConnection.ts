import { MongoClient } from 'mongodb';

class DatabaseConnection {
  mongoClient: MongoClient;

  constructor(uri: string) {
    this.mongoClient = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  getMongoClient(): MongoClient {
    return this.mongoClient;
  }

  connect(): Promise<MongoClient> {
    return this.mongoClient.connect();
  }

  close(): void {
    this.mongoClient.close();
  }
}

export default DatabaseConnection;
