import express from "express";
import {
  getApiDocumentation,
  getLanguageWord,
} from "../controllers/app.controllers";

const apiRouter = express.Router();

apiRouter.get("/", getApiDocumentation);
apiRouter.get("/:language", getLanguageWord);

export default apiRouter;
