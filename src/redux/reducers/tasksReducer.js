import { ADD_TASK, GET_TASKS, DELETE_TASK, UPDATE_TASK } from '../actions/actionsType'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  data: [],
}
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state };
    case ADD_TASK:
        return {
            ...state,
            data: [
              ...state.data,
              {
                id: uuidv4(),
                title: action.payload,
              },
            ],
          }
          case DELETE_TASK:
            return {
                ...state,
                data: [
                  ...state.data.filter(task => task.id !== action.payload)
                  
                ],
              }
              case UPDATE_TASK:
                return {
                  ...state,
                  data: [
                    ...state.data.map(task => {
                      if (task.id === action.payload.id) {
                        return {...task, title: action.payload.updatedTask}
                      }
                      return task
                    })
                  ]
                }
    default: {
      return state;
    }
  }
}
export default tasksReducer
