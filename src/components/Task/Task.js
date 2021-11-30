
const Task = ({ title, deleteTask, editTask }) => {
 
  
  return (
    <>
      <div>
        <span>{title}</span>
      </div>
      <button onClick={deleteTask}>Delete</button>
      <button onClick={editTask}>Edit</button>
    </>
  )
}
export default Task
