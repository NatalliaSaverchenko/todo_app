import { useState } from 'react'
import styles from './Task.module.css'
const Task = ({ id, title, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editCurrentTask, setEditCurrentTask] = useState(title)
  const updateTaskInput = () => {
    updateTask(id, editCurrentTask)
    setIsEditing(false)
  }
  return (
    <div className={styles.taskRow}>
      {isEditing ? (
        <div className={styles.taskRowBlock}>
          <div className={styles.taskRowEditBlock}> 
            <input
              type="text"
              value={editCurrentTask}
              onChange={(e) => setEditCurrentTask(e.target.value)}
            />
          <button onClick={updateTaskInput}>Save</button>

          </div>
        </div>
      ) : (
        <li className={styles.task}>{title}</li>
      )}

      <button className={styles.btnDelete} onClick={deleteTask}>Delete</button>
      <button className={styles.btnEdit} onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  )
}
export default Task
