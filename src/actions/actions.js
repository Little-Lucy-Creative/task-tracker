export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addTask = (list_id, task_name) => {
    console.log('made to add task action');
    return({type: ADD_TASK, payload: {list_id: list_id, task_name: task_name}})
}
export const deleteTask = id => {
    return({type: DELETE_TASK, payload: id });
}
export const editTask = (newTaskName, id) => {
    return({type: EDIT_TASK, payload: {newTaskName, id }})
}