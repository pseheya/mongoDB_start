const apiRouter = require("express").Router();
const { getApiDocumentation } = require("../controllers/app.controllers");

apiRouter.get("/", getApiDocumentation);
