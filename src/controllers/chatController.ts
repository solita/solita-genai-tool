import { Router } from 'express'
import { sendChatMessage } from 'services/LangChainService'

export const chatRouter = Router()

chatRouter.post('/', async (req, res) => {
  const message = await sendChatMessage(req.body.message)
  res.json(message)
})
