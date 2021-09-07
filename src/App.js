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
	const { lists } = props

	useEffect(()=>{
		const storedLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if(storedLists){
			props.updateStateFromMemory(storedLists) 
		}
	}, [])

	useEffect(() =>{
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists))
	}, [lists])

	return (
		<AppStylz>
			<h1> Title!!!! </h1>
			<Lists />
		</AppStylz>
	);
}

const mapStateToProps = state => {
	return {
		lists: state.lists,
	};
};

export default connect(mapStateToProps, {updateStateFromMemory})(App);
