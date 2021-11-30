function logout() {
	let cookies = document.cookie.split("; ");
	let token = cookies
		.find((cookie) => {
			return cookie.includes("x-auth-token");
		})
		.split("=")[1];

	console.log(token);
	let resources = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: "",
	};
	return fetch("http://localhost:9999/api/users/logout", resources).then(
		(res) => {
			console.log(res.status);
			console.log(res.body);
			return res.json();
		}
	);
}

function Logout(props){
    return (
		<main className="Main">
			<div className="Logout">
                <h2>Logout</h2>
                <br />
                <br />
                <p>Are you sure you wish to logout?</p>
                <br />
				<p>
					<button onClick={() => {
						logout().then(data=>{
							console.log(data)
							document.cookie = `x-auth-token=`;
							document.cookie = `user={"email":"","loggedin":"","admin":""}`
							props.updateLogin({
								loggedin: false,
								email: "",
								admin: ""
							})
						})
					}}>Logout</button>
				</p>
			</div>
			
		</main>
	);
}


export default Logout;