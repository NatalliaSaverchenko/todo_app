import { useState } from 'react'
import Task from '../../components/Task/Task'

const TasksList = () => {
  const [tasks, setTasks] = useState([])
  return (
    <div>
      <h1>List of Tasks</h1>
      <div>
        {tasks &&
          tasks.map((task) => {
            return <Task key={task.id} id={task.id} name={task.title} />
          })}
      </div>
    </div>
  )
}
export default TasksList