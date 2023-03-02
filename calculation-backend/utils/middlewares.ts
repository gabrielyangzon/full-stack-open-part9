//import * as logger from "./logger";

import { Request, Response, NextFunction } from "express";

const requestLogger = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  // logger.info("Method:", request.method);
  // logger.info("Path:  ", request.path);
  // logger.info("Body:  ", request.body);
  // logger.info("Params:", request.params);
  // logger.info("/end");
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("Params:", request.params);
  console.log("/end");
  next();
};

const errorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(error.message);

  if (error.name === "CastError")
    return response.status(400).send({ error: "malformatted id" });
  else if (error.name === "ValidationError")
    return response.status(400).json({ error: error.message });
  else if (error.name === "SyntaxError")
    return response.status(400).json({ error: "malformatted parameters" });
  else if (error.name === "TypeError")
    return response.status(400).json({ error: "parameters missing" });

  next(error);

  return;
};

export { requestLogger, errorHandler };
