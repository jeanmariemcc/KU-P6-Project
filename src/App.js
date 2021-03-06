import React from "react";

import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Logout from "./pages/Logout";
import PrivateRoute from "./components/PrivateRoute";

function App(props) {
	const loggedIn = props.loggedin;
	const loggedOut = !props.loggedin;

	let admin = props.admin;
	return (
		<div className="App Container">
			<Routes>
				<Route path="/" exact element={<Home />} />

				<Route
					path="/create"
					element={
						<PrivateRoute
							isAuth={loggedIn}
							admin={admin}
							path="create"
							redirectTo="/"
						>
							<Create
								updateLogin={props.updateLogin}
								admin={admin}
							/>
						</PrivateRoute>
					}
				/>

				<Route
					path="/post/:id"
					element={
						<PrivateRoute
							isAuth={loggedIn}
							admin={admin}
							path="post"
							redirectTo="/login"
						>
							<Single
								updateLogin={props.updateLogin}
								admin={admin}
							/>
						</PrivateRoute>
					}
				/>

				<Route
					path="register"
					element={
						<PrivateRoute
							isAuth={loggedOut}
							path="register"
							redirectTo="/login"
						>
							<Register updateLogin={props.updateLogin} />
						</PrivateRoute>
					}
				/>

				<Route
					path="login"
					element={
						<PrivateRoute
							isAuth={loggedOut}
							path="login"
							redirectTo="/"
						>
							<Login updateLogin={props.updateLogin} />
						</PrivateRoute>
					}
				/>

				<Route
					path="logout"
					element={
						<PrivateRoute
							isAuth={loggedIn}
							path="logout"
							redirectTo="/"
						>
							<Logout updateLogin={props.updateLogin} />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}
export default App;
