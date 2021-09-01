import { v4 as uuidv4 } from 'uuid'

const initialState = {
  tasks: [
      { taskName: 'groceries', completed: false, id: uuidv4()}
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case("ADD_TASK"):
      return {
        ...state,
        tasks: [...state.tasks, { task: action.payload, completed: false, id: uuidv4() }],
      };
    case("DELETE_TASK"):
      return {

      }
    case("EDIT_TASK"):
      return {

      }
    default:
      return state;
  }
};

export default reducer;