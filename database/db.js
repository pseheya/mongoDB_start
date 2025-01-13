// require("dotenv").config();
// const { MongoClient } = require("mongodb");

// // const {
// //   ukrainianWords,
// //   frenchWords,
// //   spanishWords,
// // } = require("../data/testData/index");

// const uri = process.env.MONGODB_URI;
// const dbName = "languageDB";
// const ukrainianCollection = "ukrainian";
// const frCollection = "french";
// const spnCollection = "spanish";

// async function createDataBase() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log("Database connected successfully");

//     const db = client.db(dbName);

//     const urkCollection = db.collection(ukrainianCollection);
//     const frenchCollection = db.collection(frCollection);
//     const spanishCollection = db.collection(spnCollection);

//     const insertUkrainian = await urkCollection.insertMany(ukrainianWords);
//     console.log(
//       `Inserted ${insertUkrainian.insertedCount} documents into Ukrainian collection`
//     );

//     const insertFrench = await frenchCollection.insertMany(frenchWords);
//     console.log(
//       `Inserted ${insertFrench.insertedCount} documents into French collection`
//     );

//     const insertSpanish = await spanishCollection.insertMany(spanishWords);
//     console.log(
//       `Inserted ${insertSpanish.insertedCount} documents into Spanish collection`
//     );
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// createDataBase()
//   .then(() => {
//     console.log("No errors");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
