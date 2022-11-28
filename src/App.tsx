import { useState } from 'react';
import * as Components from './App.styled';
import { Item } from './types/item'
import { ListItem } from './components/ListItem'

function App() {
  const [list, setList] = useState<Item[]>([]);

  return (
    <Components.Container>
      <Components.Area>
        <Components.Header>To-Do List</Components.Header>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Components.Area>
    </Components.Container>
  )
}

export default App
