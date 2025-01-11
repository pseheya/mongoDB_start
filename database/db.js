// const ENV = process.env.NODE_ENV || "mongoDB";
const { MongoClient } = require("mongodb");

// console.log(process.env);
// console.log(ENV);
// console.log(process.env.MONGODB_URI);

const {
  ukrainianWords,
  frenchWords,
  spanishWords,
} = require("../data/testData/index");

const uri =
  "mongodb+srv://afirstuser:8989okidoki789@cluster0.fgrln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "languageDB";
const ukrainianCollection = "ukrainian";
const frCollection = "french";
const spnCollection = "spanish";

async function createDataBase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Database connected successfully");

    const db = client.db(dbName);

    const urkCollection = db.collection(ukrainianCollection);
    const frenchCollection = db.collection(frCollection);
    const spanishCollection = db.collection(spnCollection);

    const insertUkrainian = await urkCollection.insertMany(ukrainianWords);
    console.log(
      `Inserted ${insertUkrainian.insertedCount} documents into Ukrainian collection`
    );

    const insertFrench = await frenchCollection.insertMany(frenchWords);
    console.log(
      `Inserted ${insertFrench.insertedCount} documents into French collection`
    );

    const insertSpanish = await spanishCollection.insertMany(spanishWords);
    console.log(
      `Inserted ${insertSpanish.insertedCount} documents into Spanish collection`
    );
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
    console.log("Database connection closed");
  }
}

createDataBase()
  .then(() => {
    console.log("No errors");
  })
  .catch((err) => {
    console.log(err);
  });
