import { v4 as uuidv4 } from "uuid";

const initialState = {
  colors: {
    red: "#543211",
  },
  lists: [
    {
      list_id: uuidv4(),
      list_name: "First List",
      list_editing: false,
      list_color: "red",
      tasks: [
        {
          task_name: "Buy groceries",
          task_completed: false,
          task_id: uuidv4(),
          task_editing: false,
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        lists: [
          state.lists.map((list) => {
            if (list.list_id === action.payload.list_id) {
              return {
                ...list,
                tasks: [
                  ...list.tasks,
                  {
                    task_name: action.payload.task_name,
                    task_completed: false,
                    task_id: uuidv4(),
                    task_editing: false,
                  },
                ],
              };
            } else {
              return list;
            }
          }),
        ],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item !== action.payload && item),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { taskName: action.payload }],
      };
    default:
      return state;
  }
};

export default reducer;
