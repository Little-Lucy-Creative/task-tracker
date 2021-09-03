export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addTask = taskName => {
    return({type: ADD_TASK, payload: taskName});
}
export const deleteTask = id => {
    return({type: DELETE_TASK, payload: id });
}
export const editTask = (newTaskName, id) => {
    return({type: EDIT_TASK, payload: {task: newTaskName, id: id })
}