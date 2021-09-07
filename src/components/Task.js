import React from "react";
import { connect } from "react-redux";
import { addTask, editTask, deleteTask, toggleCompleteTask } from "../actions/actions";
import styled from "styled-components";

const TaskStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5%;

	button {
		padding: 2px 5px;
	}

	.task_buttons {
		display: flex;
	}
`;

const Task = props => {
	const { list, task } = props;

	const handleEditTask = (list_id, task_id) => {
		// props.editTask(list_id, task_id, edited_task);
	};

	const handleDeleteTask = (list_id, task_id) => {
		// e.preventDefault();
		props.deleteTask(list_id, task_id);
	};

	const toggleComplete = (list_id, task_id) => {
		props.toggleCompleteTask(list_id, task_id);
	}

	return (
		<TaskStyle>
			<h4 className={task.task_completed ? "complete task" : "incomplete task"} onClick={()=> toggleComplete(list.list_id, task.task_id)}> {task.task_name} </h4>
			<div className="task_buttons">
				<button onClick={() => handleEditTask(list.list_id, task.task_id)}>
					E
				</button>
				<button onClick={() => handleDeleteTask(list.list_id, task.task_id)}>
					X
				</button>
			</div>
		</TaskStyle>
	);
};

export default connect(null, {
	addTask,
	editTask,
	deleteTask,
	toggleCompleteTask
})(Task);
