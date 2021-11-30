import React from "react";
import loginHelper from "../Helpers/loginHelper";
// import LoginCheck from "./SiteStateObj";

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:'',
			admin: false
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	//todo fetch the first 11 posts to get the links to the pages
	changeHandler(event) {
		//console.log(event.target)
		if(event.target.name==="email"){
			this.setState({email: event.target.value});	
		}else if(event.target.name==="password"){
		this.setState({password: event.target.value});
		}
	}
	submitHandler(event) {
		//fetch api
		loginHelper(this.state)
		.then(data=>{
			console.log(data);
			document.cookie = `x-auth-token=`+ JSON.stringify(data.token);
			document.cookie = `user={"email":"${data.user.email}","admin":${data.user.admin}}`
			//console.log(data.user.posts)
			//add the updateLogin function
			this.props.updateLogin({
				loggedin: data.token,
				email: data.user.email,
				admin: data.admin
			})
			console.log(this.props);
		})
		
		//need to save the email
		event.preventDefault();
		// Doing some AJAX with the data...
		//run the updateLogin method
	}
	

	render() {
		//console.log(links);
		const {email,password} = this.state
		console.log(this.state)
		return (
			<main className="Login">
				<h1>Login Page</h1>
				<form onSubmit={this.submitHandler}>
					<div className="form-control">
						<label htmlFor="username">Email</label>
						<input name="email" type="text" value={email} onChange={this.changeHandler} />
					</div>
					<div className="form-control">
						<label htmlFor="password">Password</label>
						<input name="password" type="password" value={password} onChange={this.changeHandler} />
					</div>
					<div className="form-control">
    					<button type="submit">Login</button>
                    </div>
				</form>
			</main>
		);
	}
}

export default Login;
