import { v4 as uuidv4 } from 'uuid'

const initialState = {
  tasks: [
      { taskName: 'groceries', completed: false, id: uuidv4(), editing: false}
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case("ADD_TASK"):
      return {
        ...state,
        tasks: [...state.tasks, { taskName: action.payload, completed: false, id: uuidv4() }],
      };
    case("DELETE_TASK"):
      return {
        ...state,
        tasks: state.tasks.filter(item => item !== action.payload && item)
      }
    case("EDIT_TASK"):
      return {
        ...state,
        tasks: [ ...state.tasks, { taskName: action.payload } ]
      }
    default:
      return state;
  }
};

export default reducer;