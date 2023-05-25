import './Prompt.css'
import { useState } from 'react'
import ChatFeed from '../ChatFeed/ChatFeed'
import Spinner from '../Spinner/Spinner'
import { PromptInput } from 'components/Prompt/PromptInput'
import { SendChatMessage } from 'services/chatService'

type Conversation = {
  question: string
  answer: string
}

function Prompt() {
  const [conversation, setConversation] = useState<Conversation[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const onSubmitHandler = async (inputValue: string) => {
    try {
      setLoading(true)

      const result = await SendChatMessage(inputValue)

      setConversation((oldArray) => [...oldArray, { question: inputValue, answer: result.message }])
      setLoading(false)
      setError(false)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  return (
    <div>
      <ChatFeed conversation={conversation} />
      {loading ? (
        <div className="container">
          <Spinner />
        </div>
      ) : (
        <PromptInput onSubmit={onSubmitHandler} />
      )}
    </div>
  )
}

export default Prompt
