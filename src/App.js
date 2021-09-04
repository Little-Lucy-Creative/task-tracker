import React from "react";
import Lists from "./components/Lists";
import "./App.css";
import styled from "styled-components";

const AppStylz = styled.div`
	h1 {
	}
`;

function App() {
	return (
		<AppStylz>
			<h1> Title!!!! </h1>
			<Lists />
		</AppStylz>
	);
}

export default App;
