import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";

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
	return (
		<div>
			<h3> {list.list_name} </h3>
			{list.tasks.map((task, idx) => {
				return (
					<div>
						<h3 key={idx}> {task.task_name} </h3>
						<button>E</button>
						<button>X</button>
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

export default connect(null, { addTask })(List);
