import { RequestHandler } from "express"
import { NextFunction, Request, Response } from "express"

const safe =
  (callback: RequestHandler): RequestHandler =>
  (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(callback(req, res, next)).catch(next)
  }

export default safe
