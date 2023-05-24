import { Button, Item, ListBox, Popover, Select, SelectValue } from 'react-aria-components'
import './TemplateSelector.css'

function TemplateSelector() {
  return (
    <>
      <label id="label">Select a template</label>
      <Select aria-labelledby="label">
        <Button>
          <SelectValue />
          <span aria-hidden="true">⮟</span>
        </Button>
        <Popover>
          <ListBox>
            <Item>Classic Q&A</Item>
          </ListBox>
        </Popover>
      </Select>
    </>
  )
}

export default TemplateSelector
