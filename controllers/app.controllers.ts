import { Request, Response } from "express";

export const getApiDocumentation = (req: Request, res: Response): void => {
  const languages = ["Ukrainian", "French", "Spanish"];
  res.json({
    message: "API Documentation",
    languages: languages,
  });
};
