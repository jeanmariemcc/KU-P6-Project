import React from "react";
import AllPosts from "./AllPosts";
// import Posts from "./Posts";

class Main extends React.Component {
	render() {
		// let limit;
		// if (this.props.limit !== undefined) {
		// 	limit = Number(this.props.limit);
		// }
		// console.log(limit);
		return (
			<main className="Main">
				{/* <h1>Latest articles</h1> */}
				<AllPosts />
			</main>
		);
	}
}

export default Main;
