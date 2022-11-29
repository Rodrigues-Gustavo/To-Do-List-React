import { useState } from 'react';
import * as Components from './App.styled';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length +1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <Components.Container>
      <Components.Area>
        <Components.Header>To-Do List</Components.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Components.Area>
    </Components.Container>
  )
}

export default App
