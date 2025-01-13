import { MongoClient, Db, Collection } from "mongodb";

const uri: string = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName: string = "languageDB";

const connectToDatabase = async (): Promise<Db> => {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  return db;
};

export const fetchAllLanguageWords = async (
  language: string
): Promise<any[]> => {
  const db = await connectToDatabase();
  const collection: Collection = db.collection(language);
  const words = await collection.find({}).toArray();
  return words;
};
