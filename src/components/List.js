import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";
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

	const handleSubmit = e => {
		e.preventDefault();
		props.addTask(list.list_id, taskName);
		setTaskName("");
	};

	const handleEditList = list_id => {
		// props.editTask(list_id, task_id, edited_task);
	};

	const handleDeleteList = list_id => {
		// e.preventDefault();
		props.deleteList(list_id);
	};

	return (
		<div>
			<h3> {list.list_name} </h3>
			<button onClick={() => handleEditList(list.list_id)}>E</button>
			<button onClick={() => handleDeleteList(list.list_id)}>X</button>
			{list.tasks.map((task, idx) => {
				return <Task key={idx} list={list} task={task} />;
			})}
			<div>
				<form onSubmit={handleSubmit}>
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
