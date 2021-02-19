import { Collection, MongoClient } from 'mongodb';

interface IMongoDb {
  client: Promise<MongoClient> | MongoClient
  collection: Collection
}

export default IMongoDb;
