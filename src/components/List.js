import React, { useState } from "react";
import { connect } from "react-redux";
import {
	addTask,
	editTask,
	deleteTask,
	addList,
	editList,
	deleteList,
} from "../actions/actions";

const List = props => {
	const [taskName, setTaskName] = useState("");
	const { list } = props;

	const handleChange = e => {
		setTaskName(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		props.addTask(list.list_id, taskName);
		setTaskName("");
	};

	const handleEdit = (list_id, task_id) => {
		// props.editTask(list_id, task_id, edited_task);
	};

	const handleDeleteList = list_id => {
		// e.preventDefault();
		props.deleteList(list_id);
	};

	const handleDeleteTask = (list_id, task_id) => {
		// e.preventDefault();
		props.deleteTask(list_id, task_id);
	};

	return (
		<div>
			<h3> {list.list_name} </h3>
			<button onClick={() => handleDeleteList(list.list_id)}>X</button>
			{list.tasks.map((task, idx) => {
				return (
					<div key={idx}>
						<h3> {task.task_name} </h3>
						<button onClick={() => handleEdit()}>E</button>
						<button
							onClick={() => handleDeleteTask(list.list_id, task.task_id)}
						>
							X
						</button>
					</div>
				);
			})}
			<div>
				<form onSubmit={onSubmit}>
					<label>
						Title
						<input
							value={taskName}
							onChange={handleChange}
							name="taskName"
							type="text"
						/>
					</label>
					<button type="submit"> Add TaDa! </button>
				</form>
			</div>
		</div>
	);
};

export default connect(null, {
	addTask,
	editTask,
	deleteTask,
	addList,
	editList,
	deleteList,
})(List);
