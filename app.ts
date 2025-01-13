import "dotenv/config.js";
import express from "express";
import apiRouter from "./routers/router.js";
import { createDataBase } from "./database/db.js";

const app = express();

const port: number = 3000;

app.use("/api", apiRouter);

const bootstrap = async () => {
  await createDataBase();

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

bootstrap();
