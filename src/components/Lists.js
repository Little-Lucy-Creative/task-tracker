import React, { useState } from "react";
import { connect } from "react-redux";
import List from "./List";
import { addList } from "../actions/actions";
import { v4 as uuidv4 } from "uuid";

const Lists = props => {
	const [newList, setNewList] = useState("");
	const [creatingList, setCreatingList] = useState(false);

	const handleChange = e => {
		setNewList(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.addList({
			list_id: uuidv4(),
			list_name: newList,
			list_editing: false,
			list_color: "red", // TO DO: hook this up to user choice
			tasks: [],
		});
		setNewList("");
		setCreatingList(false);
	};

	return (
		<div>
			<h2>To Dooz!!!!</h2>
			{creatingList ? (
				<form onSubmit={handleSubmit}>
					<label>
						Ta-Dooz Name:
						<input
							value={newList}
							onChange={handleChange}
							name="newList"
							type="text"
						/>
					</label>
					{/* <label> // TO DO: use this to let User choose color (not finished...thinking radio button? drop down?)
						List Color
						<input
							value={listColor}
							onChange={handleChange}
							name="listColor"
							type="text"
						/>
					</label> */}
					<button type="submit"> Add New Ta-Dooz! </button>
				</form>
			) : (
				<button onClick={() => setCreatingList(true)}>Create List</button>
			)}
			{props.lists.map((list, idx) => {
				return <List key={idx} list={list} />;
			})}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		lists: state.lists,
	};
};

export default connect(mapStateToProps, { addList })(Lists);
