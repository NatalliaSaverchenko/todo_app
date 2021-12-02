import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './TaskInput.module.css'
const TaskInput = ({ addTask }) => {
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const onChangeInput = (event) => {
    setValue(event.target.value)
  }
  const addTaskInput = () => {
    if (value) {
      dispatch(addTask(value))
    }
    setValue('')
  }
  return (
    <div className={styles.taskInputContent}>
      <div className={styles.taskInputContainer}>
        <input
          className={styles.taskInput}
          type="text"
          value={value}
          placeholder="Enter a task"
          onChange={onChangeInput}
        />

        <button onClick={addTaskInput}>Add</button>
      </div>
    </div>
  )
}
export default TaskInput
