import { useState } from 'react';
import * as Components from './App.styled';
import { Item } from './types/item'

function App() {
  const [list, setList] = useState<Item[]>([]);

  return (
    <Components.Container>
      <Components.Area>
        <Components.Header>To-Do List</Components.Header>
      </Components.Area>
    </Components.Container>
  )
}

export default App
