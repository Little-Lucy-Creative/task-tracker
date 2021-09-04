export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const EDIT_LIST = "EDIT_LIST";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addList = new_list => {
	return {
		type: ADD_LIST,
		payload: new_list,
	};
};
export const deleteList = list_id => {
	return { type: DELETE_LIST, payload: list_id };
};
export const editList = (list_id, edited_list) => {
	return {
		type: EDIT_LIST,
		payload: { list_id, edited_list },
	};
};

export const addTask = (list_id, task_name) => {
	return {
		type: ADD_TASK,
		payload: { list_id, task_name },
	};
};
export const deleteTask = (list_id, task_id) => {
	return { type: DELETE_TASK, payload: { list_id, task_id } };
};
export const editTask = (list_id, task_id, edited_task) => {
	return {
		type: EDIT_TASK,
		payload: { list_id, task_id, edited_task },
	};
};
