import styles from './codeViewer.module.scss'
import Editor from '@monaco-editor/react'

interface IProps {
  children: string
  language?: string
}
const LINE_HEIGHT = 18
const MAX_HEIGHT = 500
const MIN_HEIGHT = 100

export const CodeViewer = ({ children, language }: IProps) => {
  return (
    <>
      <div className={styles.container}>
        {language ? <div className={styles.language}>{language}</div> : ''}
        <div className={styles.codeViewer}>
          <Editor
            language={language}
            options={{ readOnly: true, minimap: { enabled: false }, automaticLayout: true }}
            theme="vs-dark"
            defaultValue={children}
            className={styles.code}
            onMount={(editor) => {
              const lineCount = editor.getModel()?.getLineCount() || 0
              const height = Math.min(Math.max(lineCount * LINE_HEIGHT, MIN_HEIGHT), MAX_HEIGHT)
              editor.getContainerDomNode().style.height = height + 'px'
              editor.layout()
            }}
          />
        </div>
      </div>
    </>
  )
}
