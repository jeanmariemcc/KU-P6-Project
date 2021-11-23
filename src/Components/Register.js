import React from "react";
// import Posts from "./Posts";

class Register extends React.Component {
	render() {
		// console.log(links);
		return (
			<main className="Main">
				<h1>Register</h1>
				<form>
                    <div className="form-control">
                        <label for="email">Email</label>
                        <input name="email" type="text"/>
                    </div>
                    
                    <div className="form-control">
                        <label for="password">Password</label>
                        <input name="password" type="password"/>
                    </div>
                   
                    <div className="form-control">
                        <label for="rePassword">Repeat Password</label>
                        <input name="rePassword" type="password"/>
                    </div>
                   
                    <div className="form-control">
                        <button type="submit">Register</button>
                    </div>
                </form>
			</main>
		);
	}
}

export default Register;
