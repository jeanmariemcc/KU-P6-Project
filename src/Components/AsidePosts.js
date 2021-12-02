import { Link } from "react-router-dom";

function AsidePosts(props) {
	// console.log(props);
	let id = props.id;
	let linkto = "OneArticle/:" + id;

	return (
		<div className="Post">
			<Link to={linkto}>
				<h6>{props.title}</h6>
			</Link>
		</div>
	);
}
export default AsidePosts;
