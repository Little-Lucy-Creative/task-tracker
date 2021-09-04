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
				{
					task_name: "Buy games",
					task_completed: false,
					task_id: uuidv4(),
					task_editing: false,
				},
				{
					task_name: "Mow lawn",
					task_completed: false,
					task_id: uuidv4(),
					task_editing: false,
				},
			],
		},
		{
			list_id: uuidv4(),
			list_name: "Second List",
			list_editing: false,
			list_color: "red",
			tasks: [
				{
					task_name: "Eat groceries",
					task_completed: false,
					task_id: uuidv4(),
					task_editing: false,
				},
				{
					task_name: "Eat games",
					task_completed: false,
					task_id: uuidv4(),
					task_editing: false,
				},
				{
					task_name: "Eat lawn",
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
		case "ADD_LIST":
			return {
				...state,
				lists: [...state.lists, action.payload.new_list],
			};
		case "DELETE_LIST":
			return {
				...state,
				lists: state.lists.filter(list => {
					if (list.list_id !== action.payload) {
						return list;
					}
					return null;
				}),
			};
		case "EDIT_LIST":
			return {
				...state,
				lists: state.lists.map(list => {
					if (list.list_id === action.payload.list_id) {
						return {
							...action.payload.edited_list,
						};
					} else {
						return list;
					}
				}),
			};
		case "ADD_TASK":
			return {
				...state,
				lists: state.lists.map(list => {
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
			};
		case "DELETE_TASK":
			return {
				...state,
				lists: state.lists.map(list => {
					if (list.list_id === action.payload.list_id) {
						return {
							...list,
							tasks: list.tasks.filter(task => {
								if (task.task_id !== action.payload.task_id) {
									return task;
								}
								return null;
							}),
						};
					} else {
						return list;
					}
				}),
			};
		case "EDIT_TASK":
			return {
				...state,
				lists: state.lists.map(list => {
					if (list.list_id === action.payload.list_id) {
						return {
							...list,
							tasks: list.tasks.map(task => {
								if (task.task_id === action.payload.task_id) {
									return {
										...action.payload.edited_task,
									};
								} else {
									return task;
								}
							}),
						};
					} else {
						return list;
					}
				}),
			};
		default:
			return state;
	}
};

export default reducer;
