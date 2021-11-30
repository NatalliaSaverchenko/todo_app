import Header from '../../components/Header/Header'
import TaskInput from '../../components/TaskInput/TaskInput'
import { addTask } from '../../redux/actions/tasksActions'

const Home = () => {
  return (
    <>
      <Header />
      <TaskInput addTask={addTask}/>
    </>
  )
}
export default Home
