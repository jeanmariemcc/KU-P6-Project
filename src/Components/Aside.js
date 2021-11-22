import React from "react";

import titles from "../Data/titles.json";
// import { Link } from "react-router-dom";
import ListItem from "./ListItem";

class Aside extends React.Component {
	render() {
		// console.log(titles);
		return (
			// using dummy Data
			// we will need to read the database a pass an array of blog titles

			<aside className="Aside">
				<h4>Dr. Hartwig's Blog Articles</h4>

				<ul>
					{titles.map((title) => {
						return <ListItem location={title} />;
					})}
				</ul>
			</aside>
		);
	}
}

export default Aside;
