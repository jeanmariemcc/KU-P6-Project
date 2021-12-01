// import AllPosts from "./AllPosts";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import sendPost from "../Helpers/sendPost"; //??

function Create(props) {
	const navigate = useNavigate();
	const [post, setPost] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [title, setTitle] = useState("");
	const dateCreated = new Date().toLocaleDateString();
	const changeHandler = (event) => {
		//console.log(event.target)
		setPost(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		sendPost(post, title, imageURL, dateCreated).then((res) => {
			navigate("/");

			// props.addPost();
		});
	};
	return (
		<main className="Main">
			<h1>Create a new Blog Post</h1>

			<form onSubmit={submitHandler}>
				<div className="form-control">
					<label for="title">Title</label>
					<input
						name="title"
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<div className="form-control">
					<label for="imageURL">Image URL</label>
					<input
						name="imageURL"
						type="text"
						value={imageURL}
						onChange={(e) => {
							setImageURL(e.target.value);
						}}
					/>
				</div>

				<div className="form-control">
					<label for="description">Content</label>

					<textarea
						name="description"
						value={post}
						onChange={changeHandler}
					></textarea>
				</div>
				<button type="submit">Post</button>
			</form>
			{/* <h2>Last 3 Posts on your wall</h2>
				<AllPosts user={props.user} limit="3" /> */}
		</main>
	);
}

export default Create;

// import React from "react";

// class Create extends React.Component {
// 	render() {
// 		// can check input validation here
// 		// e.g. regex the URL
// 		// const {title, imageURL, description} = this.state;

// 		// console.log(links);
// 		return (
// 			<main className="Main">
// 				<h1>Create Article</h1>
// 				<form>
// 					<div className="form-control">
// 						<label for="text">Title</label>
// 						<input name="title" type="text" />
// 					</div>
// 					<div className="form-control">
// 						<label for="imageURL">Image URL</label>
// 						<input name="imageURL" type="text" />
// 					</div>

// 					<div className="form-control">
// 						<label for="description">Content</label>
// 						<textarea name="description"></textarea>
// 					</div>

// 					<div className="form-control">
// 						<button type="submit">Create</button>
// 					</div>
// 				</form>
// 			</main>
// 		);
// 	}
// }

// export default Create;
