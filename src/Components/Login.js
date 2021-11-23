import React from "react";
// import Posts from "./Posts";

class Login extends React.Component {
	render() {
		// console.log(links);
		return (
			<main className="Main">
				<h1>Login</h1>
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
                        <button type="submit">Register</button>
                    </div>
                </form>
			</main>
		);
	}
}

export default Login;
