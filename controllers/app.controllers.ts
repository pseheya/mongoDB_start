import { NextFunction, Request, Response } from "express";
import { fetchAllLanguageWords } from "../models/app.model";

export const getApiDocumentation = (req: Request, res: Response): void => {
  const languages = ["Ukrainian", "French", "Spanish"];
  res.json({
    message: "API Documentation",
    languages: languages,
  });
};

export const getLanguageWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const language: string = req.params.language;
    const words = await fetchAllLanguageWords(language);
    res.status(200).json(words);
  } catch (err) {
    console.log(err);
  }
};
