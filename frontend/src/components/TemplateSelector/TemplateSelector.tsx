import { Button, Item, ListBox, Popover, Select, SelectValue, Label } from 'react-aria-components'
import './TemplateSelector.css'

function TemplateSelector() {
  return (
    <>
      <Select aria-labelledby="label">
        <Label id="label">Select a template</Label>
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
