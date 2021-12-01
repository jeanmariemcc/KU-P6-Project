import "./App.css";
// import "./index.css";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Create from "./Components/Create";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import PrivateRoute from "./Components/PrivateRoute";

// import { BrowserRouter } from "react-router-dom"; //don't need this because it is in index.js
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App(props) {
	const loggedIn = props.user.loggedin;
	const notLoggedIn = !props.user.loggedin;
	let admin = props.user.admin;
	console.log(loggedIn);
	console.log(notLoggedIn);

	return (
		<div className="App Container">
			<Aside updateLogin={props.updateLogin} admin={admin}/>
			<Routes>
				<Route
					path="/"
					exact
					element={<Main updateLogin={props.updateLogin} />}
				/>
				<Route
					path="/create"
					element={<Create updateLogin={props.updateLogin} admin={admin} />}
				/>
				<Route
					path="/register"
					element={
						<PrivateRoute
							isAuth={notLoggedIn}
							path="register"
							redirectTo="/login"
						>
							<Register />
						</PrivateRoute>
					}
				/>
				<Route
					path="/login"
					element={
						<PrivateRoute
							isAuth={notLoggedIn}
							path="login"
							redirectTo="/"
						>
							<Login updateLogin={props.updateLogin} />
						</PrivateRoute>
					}
				/>
				<Route
					path="/logout"
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
				{/* <Route path="/allposts" exact element={<Main />} /> */}
				{/* <Route */}
				{/* path="/profile" */}
				{/* element={<Profile email="test@test.com" numPosts="4" />} */}
				{/* <Route path="*" exact element={<Error />} /> */}
			</Routes>
		</div>
	);
}

export default App;
