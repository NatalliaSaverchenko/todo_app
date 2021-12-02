import { Header } from '../../components'
import { TasksList } from '../../components'
import styles from './ListOfTasks.module.css'
const ListOfTasks = () => {
    return (
        <div className={styles.listOfTasks}>
        <Header/>
        <TasksList/>
        </div>
    )
}
export default ListOfTasks
