import React from "react";
import posts from "../Data/posts.json";
import OnePost from "./OnePost";

class AllPosts extends React.Component {
	render() {
		let limit;
		if (this.props.limit != undefined) {
			limit = Number(this.props.limit);
		}
		console.log(limit);
		return (
			<main className="Main">
				<h1>All Posts Route</h1>
				{/* <Posts /> */}
				<div className="Posts">
					{posts.map((post, index) => {
						// if a limit was passed, check to see if we have passed the limit , this comes from the input route
						if (!limit || index < limit) {
							return (
								<OnePost
									text={post.text}
									title={post.title}
									image={post.image}
								/>
							);
						}
					})}
				</div>
				); }
			</main>
		);
	}
}

export default AllPosts;
