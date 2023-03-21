import { NextFunction, Request, Response } from "express";

const accessControl = (request: Request, response: Response, next: NextFunction): void => {
    response.setHeader('Access-Control-Allow-Origin', request.headers.origin)

    next()
}

export default accessControl