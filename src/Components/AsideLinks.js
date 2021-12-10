import React from "react";
// import posts from "../Data/posts.json";
import AsidePosts from "./AsidePosts";
import getPosts from "../Helpers/getPosts";

class AsideLinks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
		this.addPosts = (data) => {
			this.setState(() => {
				// console.log(data);
				return {
					posts: data,
				};
			});
		};
	}

	componentDidMount() {
		//console.log(this.props.user)
		getPosts(this.props.limit).then((data) => {
			this.addPosts(data);
		});
	}

	render() {
		// let limit;
		// if (this.props.limit !== undefined) {
		// 	limit = Number(this.props.limit);
		// }
		// console.log(limit);
		let { posts } = this.state;
		console.log(posts);
		return (
			<main className="Main">
				<div className="Posts">
					{posts.map((post, index) => {
						// if a limit was passed, check to see if we have passed the limit , this comes from the input route
						// if (!limit || index < limit) {
						let shortDesc = post.description
							.split(" ")
							.splice(0, 50)
							.join(" ");
						shortDesc = shortDesc + " ...";
						return (
							<AsidePosts
								id={post._id}
								key={index}
								description={shortDesc}
								title={post.title}
								imageURL={post.imageURL}
								dateCreated={post.dateCreated}
							/>
						);
						// }
					})}
				</div>
			</main>
		);
	}
}

export default AsideLinks;
