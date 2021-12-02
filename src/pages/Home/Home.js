import { Header } from '../../components'
import { TaskInput } from '../../components'
import { addTask } from '../../redux/actions/tasksActions'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <TaskInput addTask={addTask}/>
    </div>
  )
}
export default Home
