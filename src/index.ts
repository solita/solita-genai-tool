import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { router } from 'routes'

const PORT = process.env.PORT || '3000'
const corsMiddleware = cors({
  origin: process.env.FRONTEND_ORIGIN,
})
const app = express()
app.use(corsMiddleware)
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/ `)
})
