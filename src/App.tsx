import { useState } from 'react';
import './App.css';
import TaskAddContainer from './TaskAddContainer';
import { TaskItem, TaskItemClass } from './TaskItem';

interface Item {
  id: string;
  title: string;
  checked?: boolean
}
const TaskList = (props: { title: string }) => {
  const [todoList, setTodoList] = useState<Item[]>([])

  return (
    <>
      <TaskAddContainer handleAddTodo={(taskname: string) => {


        setTodoList((prevlist) => [...prevlist, { title: taskname, id: taskname, checked: true }])
      }} />
      {todoList.length > 0 && <ul>{todoList.map((el, index) => {

        return (index % 2 ?
          <TaskItem key={el.id} item={el.title} checked={el.checked || false}

            onTaskCheck={(id: string, checked: boolean) => {
              setTodoList((prevlist) => {
                const newList = prevlist.map(el => {

                  if (el.id === id) {
                    el.checked = checked

                  }
                  return el
                })

                return newList
              })
            }} /> :
          <TaskItemClass key={el.id} item={el.title} checked={el.checked || false}
            onTaskCheck={(id: string, checked: boolean) => {
              setTodoList((prevlist) => {
                const newList = prevlist.map(el => {

                  if (el.id === id) {
                    el.checked = checked

                  }
                  return el
                })

                return newList
              })
            }} />
        )
      }
      )}
      </ul>
      }
      {todoList.length === 0 && <p>very less todos</p>}
    </>
  )

}
function App() {
  return (
    <div className="App">
      <TaskList title="To DO" />

    </div>
  );
}

export default App;
