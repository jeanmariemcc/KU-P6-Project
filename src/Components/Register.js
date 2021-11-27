import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function isNewUser(email){
	const userURL = "http://localhost:9999/api/users/"
	return fetch(userURL).then(res=>res.json()).then(users=>{
		let hasUser = users.find(user=> {
			return user.email === email;
		});
		if(hasUser=== undefined){
			return true;
		}
		return false;
	})
}
function registerUser(email,password){   
	const url ="http://localhost:9999/api/users/register"
	let data = JSON.stringify({
		email,password
	})
	let resources = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: data,
	};
	return fetch(url,resources).then(res=>res.json())


}

function Register(props) {
	const navigate = useNavigate()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repass, setRePass] = useState("");
	const [error, setError] = useState("");
	//todo fetch the first 11 posts to get the links to the pages
	
	const submitHandler= (event)=> {
        event.preventDefault();
        if(password !== repass){
			setError("Both Passwords must be the same!");
			return;
		}
		isNewUser(email).then(bool=>{
			if(!bool){
				setError("Email address is already in use!");
				return;
			}
			registerUser(email,password).then(res=>{
				console.log(res);
				navigate("/login")
			})
		})
		
	};
		//console.log(links);
		return (
			<main className="Register">
				<h1>Register Page</h1>
				<form onSubmit={submitHandler}>
					<div className="form-control">
						<label  htmlFor="email">Email</label>
						<input  name="email"  type="email" value= {email} onChange={(e)=>{setEmail(e.target.value)}}/>
					</div>
					<div className="form-control">
						<label htmlFor="password">Password</label>
						<input name="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
					</div>
					<div className="form-control">
						<label htmlFor="repass">Re-Password</label>
						<input name="repass" type="password" value ={repass} onChange={(e)=>{setRePass(e.target.value)}}/>
						<div>{error}</div>
					</div>
                    <div className="form-control">
    					<button type="submit">Register</button>
                    </div>
				</form>
			</main>
		);
	
}

export default Register;

