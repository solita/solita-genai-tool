import { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import express from 'express'

export const errorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Uncought error: ', err)
  next(err)
}

export const crossOriginMiddleware = cors({ origin: process.env.FRONTEND_ORIGIN })

export const jsonParserMiddleware = express.json()
