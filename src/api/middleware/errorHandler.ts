
import { NextFunction, Request, Response } from "express"
import { HttpError } from "http-errors"

function errorHandler (error: HttpError, req: Request, res: Response, next: NextFunction) {
    console.error(error.message, error.status)
    res.status(error.status || 500)
    res.json(error.message)

    next()
}

export default errorHandler