import { useState } from 'react'
const Task = ({ id, title, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editCurrentTask, setEditCurrentTask] = useState(title)
  const updateTaskInput = () => {
    updateTask(id, editCurrentTask)
    setIsEditing(false)
  }
  return (
    <>
      {isEditing ? (
        <div>
          <label>
            Edit a task
            <input
              type="text"
              value={editCurrentTask}
              onChange={(e) => setEditCurrentTask(e.target.value)}
            />
          </label>
          <button onClick={updateTaskInput}>Save Task</button>
        </div>
      ) : (
        <li>{title}</li>
      )}

      <button onClick={deleteTask}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  )
}
export default Task
