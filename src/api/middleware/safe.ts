import { NextFunction, Request, Response } from "express"

const safe =
  (callback: (req: Request, res: Response, next: NextFunction) => any) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(callback(req, res, next)).catch(next)
  }

export default safe
