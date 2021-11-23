import React from "react";
// import Posts from "./Posts";

class Create extends React.Component {
	render() {
		// console.log(links);
		return (
			<main className="Main">
				<h1>Create Article</h1>
				<form>
				<div className="form-control">
                        <label for="text">Title</label>
                        <input name="title" type="text"/>
                    </div>
                    
                    <div className="form-control">
                        <label for="description">Content</label>
                        <textarea name="description"></textarea>
                    </div>
                   
                    <div className="form-control">
                        <button type="submit">Create</button>
                    </div>
				</form>
			</main>
		)
	}
}

export default Create;
