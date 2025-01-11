import express from "express";
import apiRouter from "./routers/router.js";

const app = express();

const port: number = 3000;

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
