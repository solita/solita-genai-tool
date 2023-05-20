import styles from './promptInput.module.scss'
import { TextField, Label, Input, Button } from 'react-aria-components'
import TemplateSelector from 'components/TemplateSelector/TemplateSelector'
import { useState } from 'react'

interface IProps {
  onSubmit: (inputValue: string) => void
}
export const PromptInput = ({ onSubmit }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <form
      className={styles.promptInput}
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(inputValue)
        setInputValue('')
      }}
    >
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
  )
}
