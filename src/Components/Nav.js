import React from "react";
import "../index.css";

// import links from "../Data/routes.json";
// import Link from "./Link";
import { Link } from "react-router-dom";
// import ListItem from "./ListItem";

class Nav extends React.Component {
	// TODO fetch first 11 posts to get the links to the page
	render() {
		// console.log(links);
		return (
			// <nav className="Navigation" style={{ position: "fixed" }}>
			<nav className="Navigation">
				<div>
					<div>
						<a href="/">
							<img
								class="center"
								src="./img/atlasHealthLogo.webp"
								alt="Atlas logo"
							/>
						</a>
					</div>
					<div class="divcenter">
						<ul>
							<li className="listItem">
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
							</li>
							<li className="listItem">
								<Link to="Create">Create</Link>
							</li>

							<li className="listItem">
								<Link to="Register">Register</Link>
							</li>
							<li className="listItem">
								<Link to="Login">Login</Link>
							</li>
							<li className="listItem">
								<Link to="AllPosts">All Blog Posts</Link>
							</li>
							<li className="listItem">
								<Link to="Logout">Logout</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
