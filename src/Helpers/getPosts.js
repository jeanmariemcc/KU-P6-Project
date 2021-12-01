function getPosts(articleID) {
	let url = "";
	if (!articleID) {
		url = "http://localhost:9999/atlas/articles/";
	} else {
		url = "http://localhost:9999/atlas/articles/" + articleID;
	}
	return fetch(url).then((res) => {
		// let allarticles = res.json();
		// console.log(allarticles);
		return res.json();
	});
}
export default getPosts;
