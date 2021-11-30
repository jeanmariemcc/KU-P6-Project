function getPosts(limit = 0) {
	limit = Number(limit);
	let url = "http://localhost:9999/atlas/articles/";
	// let userURL = "http://localhost:9999/atlas/users/";
	return fetch(url).then((res) => {
		// let allarticles = res.json();
		// console.log(allarticles);
		return res.json();
	});
	// .then((data) => {
	// 	return fetch(userURL)
	// 		.then((res) => res.json())
	// 		.then((users) => {
	// 			let posts = data.map((post) => {
	// 				let name = users.find((user) => {
	// 					return user._id === post.author;
	// 				});
	// 				return {
	// 					id: post._id,
	// 					author: name.username,
	// 					description: post.description,
	// 				};
	// 			});
	// 			posts.reverse();
	// 			if (limit > 0) {
	// 				console.log(posts);
	// 				console.log(user);
	// 				posts = posts
	// 					.filter((post) => {
	// 						return post.author === user;
	// 					})
	// 					.slice(0, limit);
	// 			}

	// 			return posts;
	// 		});
	// });
}
export default getPosts;
