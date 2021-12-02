import Header from '../../components/Header/Header'
import TasksList from '../../components/TasksList/TaskList'
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
