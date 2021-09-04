import React from "react";
import { connect } from "react-redux";
import List from "./List";

const Lists = props => {
	// const { lists } = props;
	return (
		<div>
			<h2>Lists!!!!</h2>
			{console.log("lists on LIST component level heyyy: ", props.lists)}
			{props.lists.map((list, idx) => {
				console.log("list on LIST component level heyyyy: ", list);
				// console.log("list TASKS on LIST component level: ", list.lists["tasks"]);
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

export default connect(mapStateToProps)(Lists);
