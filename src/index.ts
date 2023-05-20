import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { router } from 'routes'

const PORT = process.env.PORT || '3000'
const app = express()

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/ `)
})
