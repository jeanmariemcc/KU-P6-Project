import React from "react";
import { useParams } from "react-router-dom";

<<<<<<< Updated upstream
function OneArticle() {
	let { id } = useParams();
	// let url = `http://localhost:9999/atlas/articles/OneArticle/${id}`;
=======
function OneArticle(props) {
	let id = props.id;
	console.log(id);
>>>>>>> Stashed changes

	let url = `http://localhost:9999/atlas/articles/${id}`;
	console.log(url);
	fetch(url)
		.then((res) => {
			//console.log(res);
			return res.json();
		})
		.then((data) => {
			console.log(data);
			return (
				<div className="Article">
					<h1>{data.title}</h1>
					console.log(data.title);
					<img src={data.imgURL} alt="Articleimg" />
					<br />
					<div>{data.dateCreated}</div>
					<br />
					<p>{data.description}</p>
				</div>
			);
		});
}

export default OneArticle;
