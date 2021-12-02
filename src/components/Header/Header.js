import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav >
        <ul className={styles.navigation}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/tasks">List Of Tasks</NavLink></li>
        </ul>
        
        
      </nav>
    </header>
  )
}
export default Header
