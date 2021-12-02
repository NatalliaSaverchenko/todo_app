import { GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/actionsType'

export const getTasks = () => {
  return {
    type: GET_TASKS,
    payload: null,
  }
}
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  }
}
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  }
}
export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  }
}
