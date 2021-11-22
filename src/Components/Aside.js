import React from "react";
// import "../App.css";
// import "../index.css";

// import links from "../Data/routes.json";
// import { Link } from "react-router-dom";
// import ListItem from "./ListItem";

class Aside extends React.Component {
	render() {
		// console.log(links);
		return (
			// <aside className="Aside" style={{ position: "fixed" }}>
			<aside className="Aside">
				<h4>Dr. Hartwig's Blog Articles</h4>
				<ul>
					<li>Link 1</li>
					<li>Link 2</li>
				</ul>
			</aside>
		);
	}
}

export default Aside;
