import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ListOfTasks from '../pages/ListOfTasks/ListOfTasks'
const RouterView = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/tasks" element={<ListOfTasks/>} />
      <Route path="*" component={''} />
    </Routes>
  )
}

export default RouterView
