import React from "react";
import { useParams } from "react-router-dom";

function OneArticle() {
	let { id } = useParams();
	// let url = `http://localhost:9999/atlas/articles/OneArticle/${id}`;

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
