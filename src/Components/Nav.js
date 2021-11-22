import React from "react";
import "../index.css";

// import links from "../Data/routes.json";
// import Link from "./Link";
// import { Link } from "react-router-dom";
// import ListItem from "./ListItem";

class Nav extends React.Component {
	// TODO fetch first 11 posts to get the links to the page
	render() {
		// console.log(links);
		return (
			// <nav className="Navigation" style={{ position: "fixed" }}>
			<nav className="Navigation">
				<div>
					<a href="/">
						<img
							class="center"
							src="./img/atlasHealthLogo.webp"
							alt="Atlas logo"
						/>
					</a>
				</div>
				<div>
					<a
						href="http://instagram.com/atlas.health.and.wellness"
						target="_blank"
						rel="noreferrer"
					>
						<img
							class="center instagramlogo"
							src="./img/instagram-black-on-white.webp"
							alt="Instagram logo"
						></img>
					</a>
				</div>
			</nav>
		);
	}
}

export default Nav;
