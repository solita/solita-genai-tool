import ReactMarkdown from 'react-markdown'
import './ChatFeed.css'

type ConversationProps = {
  conversation: Conversation[]
}

type Conversation = {
  question: string
  answer: string
}

function ChatFeed({ conversation }: ConversationProps) {
  return (
    <>
      <div className="message-container">
        {conversation.length > 0
          ? conversation
              .slice(0)
              .reverse()
              .map((conversationPart, i) => (
                <div className="message" key={i}>
                  <div className="question">
                    <span className="bold">Q:</span> {conversationPart.question}
                  </div>
                  <div className="answer">
                    <span className="bold">A:</span> <ReactMarkdown children={conversationPart.answer} />
                  </div>
                </div>
              ))
          : ''}
      </div>
    </>
  )
}

export default ChatFeed