import React, { useEffect } from "react";
import Lists from "./components/Lists";
import "./App.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateStateFromMemory } from './actions/actions'


const LOCAL_STORAGE_KEY = 'tadaApp.lists'

const AppStylz = styled.div`
	h1 {
	}
`;

function App(props) {
	const { state } = props

	useEffect(()=>{
		const storedLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		storedLists && props.updateStateFromMemory(storedLists)
	}, [])

	useEffect(() =>{
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
	}, [state])

	return (
		<AppStylz>
			<h1> Title!!!! </h1>
			<Lists />
		</AppStylz>
	);
}

const mapStateToProps = state => {
	return {
		state: state
	};
};

export default connect(mapStateToProps, {updateStateFromMemory})(App);
