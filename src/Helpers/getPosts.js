function getPosts(articleID) {
	console.log(`getPosts articleID ${articleID}`);
	let url = "";
	if (!articleID) {
		url = "http://localhost:9999/atlas/articles/";
<<<<<<< Updated upstream
	} 
=======
	} else {
		url = "http://localhost:9999/atlas/articles/OneArticle/" + articleID;
	}
>>>>>>> Stashed changes
	return fetch(url).then((res) => {
		// let allarticles = res.json();
		// console.log(allarticles);
		return res.json();
	});
}
export default getPosts;
                                  