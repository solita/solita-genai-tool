import { FormEvent, useState } from 'react'
import { TextField, Label, Input, Button } from 'react-aria-components'
import TemplateSelector from '../TemplateSelector/TemplateSelector'
import ChatFeed from '../ChatFeed/ChatFeed'
import './Prompt.css'
import Spinner from '../Spinner/Spinner'

type Conversation = {
  question: string
  answer: string
}

function Prompt() {
  const [inputValue, setInputValue] = useState<string>('')
  const [conversation, setConversation] = useState<Conversation[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = { message: inputValue }

    try {
      setLoading(true)

      const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      setConversation((oldArray) => [...oldArray, { question: inputValue, answer: result.message }])
      setLoading(false)
      setError(false)
      setInputValue('')
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
        ''
      )}
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="item select">
            <TemplateSelector />
          </div>
          <div className="item">
            <TextField>
              <Label>Prompt</Label>
              <div className="item">
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} required={true} />
                <div className="item">
                  <Button type="submit" isDisabled={inputValue.length > 0 ? false : true}>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </Button>
                </div>
              </div>
            </TextField>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Prompt