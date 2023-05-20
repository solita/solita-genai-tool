import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { router } from 'routes'
import { errorHandler, crossOriginMiddleware, jsonParserMiddleware } from 'middlewares'
import { inspect } from 'util'

const PORT = process.env.PORT || '3000'
const app = express()

app.use([crossOriginMiddleware, jsonParserMiddleware, errorHandler])
app.use(router)

process.on('unhandledRejection', (reason: Error | any, promise) => {
  // console.log('ERROR: Rejected promise: ', inspect(promise, { depth: null }))
  console.log('unhandledRejection', reason.message || reason)
})

process.on('uncaughtException', (error: Error) => {
  console.log(`Uncaught Exception: ${error.message || error}`)
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/ `)
})
