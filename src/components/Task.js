import React from "react";
import { connect } from "react-redux";
import { addTask, editTask, deleteTask } from "../actions/actions";

const Task = props => {
	const { list, task } = props;

	const handleEditTask = (list_id, task_id) => {
		// props.editTask(list_id, task_id, edited_task);
	};

	const handleDeleteTask = (list_id, task_id) => {
		// e.preventDefault();
		props.deleteTask(list_id, task_id);
	};

	return (
		<div>
			<h3> {task.task_name} </h3>
			<button onClick={() => handleEditTask(list.list_id, task.task_id)}>
				E
			</button>
			<button onClick={() => handleDeleteTask(list.list_id, task.task_id)}>
				X
			</button>
		</div>
	);
};

export default connect(null, {
	addTask,
	editTask,
	deleteTask,
})(Task);
