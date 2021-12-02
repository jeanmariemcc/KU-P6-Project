import { Link } from "react-router-dom";

function OnePost(props) {
	// console.log(props);
	let id = props.id;
	let linkto = "OneArticle/" + id;
	console.log(linkto);

	return (
		<div className="Post">
			<h3>{props.title}</h3>
			<div>
				<h6>Updated on: {props.dateCreated} </h6>
			</div>
			<img
				src={props.imageURL}
				alt="article idea"
				align="top"
				// width="500"
				height="50"
			></img>
			<p>{props.description}</p>
			<span>
				<Link to={linkto}> [ Read the Full Article ]</Link>
			</span>
		</div>
	);
}
export default OnePost;
