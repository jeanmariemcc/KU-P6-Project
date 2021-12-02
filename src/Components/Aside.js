import React from "react";

import titles from "../Data/titles.json";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import AsideLinks from "./AsideLinks";

class Aside extends React.Component {
	render() {
		// console.log(titles);
		return (
			// using dummy Data
			// we will need to read the database a pass an array of blog titles

			<aside className="Aside">
				<h4>Dr. Hartwig's Blog Articles</h4>
				<AsideLinks />
				{/* <ul>
					<li className="listItem">
						<Link to="create">Create</Link>
					</li>
					{titles.map((title) => {
						// want to route to OneArticle/{id}
						return <ListItem key={title} location={title} />;
					})}
				</ul> */}
			</aside>
		);
	}
}

export default Aside;
