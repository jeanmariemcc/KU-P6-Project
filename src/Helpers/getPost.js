function getPost(articleID) {
	let url = "http://localhost:9999/atlas/articles/" + articleID;
	
	fetch(url).then((res) => {
		// let allarticles = res.json();
		// console.log(allarticles);
		return res.json();
	}).then(data=>{
        
    })
}

export default getPost;