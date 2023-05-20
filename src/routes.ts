import { Router } from 'express'
import { chatRouter } from 'controllers/chatController'

export const router = Router()

router.use('/chat', chatRouter)
