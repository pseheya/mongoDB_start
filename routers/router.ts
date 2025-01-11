// const apiRouter = require("express").Router();
// const { getApiDocumentation } = require("../controllers/app.controllers");

import express from "express";
import { getApiDocumentation } from "../controllers/app.controllers";

const apiRouter = express.Router();

apiRouter.get("/", getApiDocumentation);

export default apiRouter;
