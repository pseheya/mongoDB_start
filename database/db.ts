import { MongoClient } from "mongodb";

import {
  ukrainianWords,
  spanishWords,
  frenchWords,
} from "../data/testData/index";

const uri: string = process.env.MONGODB_URI || "mongodb://localhost:27017";

const dbName: string = "languageDB";
const ukrainianCollection: string = "ukrainian";
const frCollection: string = "french";
const spnCollection: string = "spanish";

export async function createDataBase(): Promise<void> {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);

    const urkCollection = db.collection(ukrainianCollection);
    const frenchCollection = db.collection(frCollection);
    const spanishCollection = db.collection(spnCollection);

    const deleteUkrainianResult = await urkCollection.deleteMany({});
    console.log(
      `Deleted ${deleteUkrainianResult.deletedCount} documents from Ukrainian collection`
    );

    const deleteFrenchResult = await frenchCollection.deleteMany({});
    console.log(
      `Deleted ${deleteFrenchResult.deletedCount} documents from French collection`
    );

    const deleteSpanishResult = await spanishCollection.deleteMany({});
    console.log(
      `Deleted ${deleteSpanishResult.deletedCount} documents from Spanish collection`
    );

    await urkCollection.insertMany(ukrainianWords);
    await frenchCollection.insertMany(frenchWords);
    await spanishCollection.insertMany(spanishWords);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
