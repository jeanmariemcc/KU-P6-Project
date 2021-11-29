import React from "react";
<<<<<<< Updated upstream
import posts from "../Data/posts.json";
import OnePost from "./OnePost";
=======
import AllPosts from "./AllPosts";
// import Posts from "./Posts";
>>>>>>> Stashed changes

class Main extends React.Component {
	render() {
		let limit;
		if (this.props.limit !== undefined) {
			limit = Number(this.props.limit);
		}
		console.log(limit);
		return (
			<main className="Main">
<<<<<<< Updated upstream
				<h1>All Blog Posts</h1>
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
				);
=======
				<h1>Latest articles</h1>
				<AllPosts />
>>>>>>> Stashed changes
			</main>
		);
	}
}

export default Main;
