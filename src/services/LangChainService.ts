import { ChatOpenAI } from 'langchain/chat_models/openai'
import { HumanChatMessage, SystemChatMessage } from 'langchain/schema'

const chat = new ChatOpenAI({
  azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIApiInstanceName: process.env.AZURE_OPENAI_API_INSTANCE_NAME,
  azureOpenAIApiDeploymentName: process.env.AZURE_OPENAI_API_DEPLOYMENT_NAME,
  azureOpenAIApiVersion: process.env.AZURE_OPENAI_API_VERSION,
  temperature: 0.9,
})

export const sendChatMessage = async (content: string, systemMessage?: string) => {
  const message = new HumanChatMessage(content)
  const SolitaGenAI = new SystemChatMessage('Your name is Solita GenAI')
  // include system message if provided
  const callMessages = systemMessage
    ? [SolitaGenAI, new SystemChatMessage(systemMessage), message]
    : [SolitaGenAI, message]
  const data = await chat.call(callMessages)
  return data.text
}
