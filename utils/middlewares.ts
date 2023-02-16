import * as logger from "./logger";

import { Request, Response, NextFunction } from "express";

const requestLogger = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("Params:", request.params);
  logger.info("/end");
  next();
};

export { requestLogger };
