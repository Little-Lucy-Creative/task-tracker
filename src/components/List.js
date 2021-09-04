import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Task from "./Task";
import {
	addTask,
	editTask,
	deleteTask,
	addList,
	editList,
	deleteList,
} from "../actions/actions";

const ListStyle = styled.div`
	padding: 2%;

	button {
		padding: 2px 5px;
	}

	.list_title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.list_buttons {
		display: flex;
	}
`;

const List = props => {
	const [taskName, setTaskName] = useState("");
	const { list } = props;

	const handleChange = e => {
		setTaskName(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		taskName ? addNewTask(list.list_id, taskName) : setTaskName("");
	};

	const addNewTask = (list_id, taskName) => {
		props.addTask(list_id, taskName);
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
		<ListStyle style={{ backgroundColor: `var(--${list.list_color})` }}>
			<div className="list_title">
				<h3> {list.list_name} </h3>
				<div className="list_buttons">
					<button onClick={() => handleEditList(list.list_id)}>E</button>
					<button onClick={() => handleDeleteList(list.list_id)}>X</button>
				</div>
			</div>
			{list.tasks.map((task, idx) => {
				return <Task key={idx} list={list} task={task} />;
			})}
			<div>
				<form onSubmit={handleSubmit}>
					{/* <label> */}
					{/* Title */}
					<input
						value={taskName}
						onChange={handleChange}
						name="taskName"
						type="text"
					/>
					{/* </label> */}
					<button type="submit"> Add TaDa! </button>
				</form>
			</div>
		</ListStyle>
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
