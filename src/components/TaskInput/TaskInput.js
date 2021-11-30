import { useState } from 'react'
import { useDispatch } from 'react-redux'
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
    <>
      <div>
        <label>
          Enter a task
          <input type="text" value={value} onChange={onChangeInput} />
        </label>
        <button onClick={addTaskInput}>Add Task</button>
      </div>
    </>
  )
}
export default TaskInput
