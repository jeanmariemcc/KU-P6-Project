import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import App from "../App";
// ????

class LoginCheck extends React.Component {
	constructor(props) {
		super(props);
		let cookies =document.cookie.split("; ")// ["cookiename= value",'cookiename= value']
		let login = false;
		let user = {
			username: ""
		};
		if(cookies.length>1){
			login = cookies.find((cookie)=>{
				return cookie.includes("token")
			});
			user = cookies.find((cookie)=>{
				return cookie.includes("user")
			});
			login = JSON.parse(login.split("=")[1]);
			user = JSON.parse(user.split("=")[1]);
			console.log("login", login);
			console.log("user", user);
		}
		//console.log(document.cookie)
		
		this.state = {
			loggedin: (login)?true:false,
			email: user.email,
			token: login
		};
		this.updateLogin = this.updateLogin.bind(this);
	}
	
	updateLogin(logInfo) {
		let user;
		if (logInfo) {
			user = logInfo;
		}
		this.setState(() => {
			if (user) {
				
				return {
					loggedin: (user.loggedin) ? true : false,
					email: user.email,
					token: user.loggedin
				};
			} else {
				return {
					loggedin: false,
					username: "",
					token: "",
				};
			}
		});
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<Nav loggedin={this.state.loggedin} />

				<App
					user={this.state}
					updateLogin={this.updateLogin}
				/>

				<Footer loggedin={this.state.loggedin} />
			</div>
		);
	}
}
export default LoginCheck;