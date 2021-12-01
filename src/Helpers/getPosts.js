function getPosts(limit = 0) {
	limit = Number(limit);
	let url = "http://localhost:9999/atlas/articles/";
	return fetch(url).then((res) => {
		// let allarticles = res.json();
		// console.log(allarticles);
		return res.json();
	});
}
export default getPosts;
