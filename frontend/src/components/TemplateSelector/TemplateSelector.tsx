import { Button, Item, ListBox, Popover, Select, SelectValue } from 'react-aria-components'
import './TemplateSelector.css'

function TemplateSelector() {
  return (
    <>
      <label id="templatelabel">Select a template</label>
      <Select aria-labelledby="templatelabel">
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
