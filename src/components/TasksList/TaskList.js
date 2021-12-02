import { useDispatch, useSelector } from 'react-redux'
import Task from '../../components/Task/Task'
import { deleteTask, updateTask } from '../../redux/actions/tasksActions'
import styles from './TaskList.module.css'

const TasksList = () => {
  const tasks = useSelector((store) => store.tasks.data)
  const dispatch = useDispatch()
  const update = (id, updatedTask) => {
    dispatch(updateTask({id, updatedTask}))
  }
  return (
    <div>
      <h1 className={styles.title} >List of Tasks</h1>
      <div className={styles.taskListBlock}>
        {tasks &&
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                deleteTask={() => dispatch(deleteTask(task.id))}
                updateTask={update}
              />
            )
          })}
      </div>
    </div>
  )
}
export default TasksList
