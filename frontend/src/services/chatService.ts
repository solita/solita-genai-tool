import axios from 'axios'

const HttpClient = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL })

export const SendChatMessage = async (chatMessage: string) => {
  const url = '/chat'
  const systemMessage = 'If the output has a codeblock then include the programming language in the markdown like so: ```javascript'
  const response = await HttpClient.post(url, { message: chatMessage, systemMessage })
  return response.data
}
