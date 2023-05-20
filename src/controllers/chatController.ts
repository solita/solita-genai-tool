import { Router } from 'express'
import { sendChatMessage } from 'services/LangChainService'

export const chatRouter = Router()

chatRouter.post('/', async (req, res) => {
  const { message, systemMessage } = req.body
  if (!message) return res.status(400).json({ error: 'property "message" is required!' })

  const responseMessage = await sendChatMessage(message, systemMessage)
  res.json({ message: responseMessage })
})
