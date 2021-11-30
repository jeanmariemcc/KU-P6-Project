function OnePost(props) {
	console.log(props);

	return (
		<div className="Post">
			<h3>{props.title}</h3>
			<h6>Updated on: {props.created}</h6>
			<img
				src={props.imageURL}
				alt="article idea"
				align="left"
				// width="500"
				height="50"
			></img>
			<p>{props.description}</p>
		</div>
	);
}
export default OnePost;
