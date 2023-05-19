import express from 'express'

const PORT = 3000
const app = express()

app.get('/', (_req, _res) => {
  _res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/ `)
})
