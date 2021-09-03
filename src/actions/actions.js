export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const addTask = taskName => {
    return({type: ADD_TASK, payload: taskName});
}
export const deleteTask = taskName => {
    return({type: DELETE_TASK, payload: taskName});
}
export const editTask = taskName => {
    return({type: EDIT_TASK, payload: taskName});
}