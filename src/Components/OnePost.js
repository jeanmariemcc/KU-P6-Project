function OnePost(props) {
	console.log(props);

	return (
		<div className="Post">
			<h3>{props.title}</h3>
			<img
				src={props.image}
				alt="article idea"
				align="left"
				// width="500"
				height="50"
			></img>
			<p>{props.text}</p>
		</div>
	);
}
export default OnePost;
