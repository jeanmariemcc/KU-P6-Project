import "./App.css";
// import "./index.css";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Create from "./Components/Create";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import AllPosts from "./Components/AllPosts";

// import { BrowserRouter } from "react-router-dom"; //don't need this because it is in index.js
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App(props) {

	return (
		<div className="App Container">
			<Aside />
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route path="/create" element={<Create />} />
				<Route path="/register" element={<Register />} />
				<Route 
					path="/login" 
					element={<Login />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/allposts" element={<AllPosts />} />
				{/* <Route */}
				{/* path="/profile" */}
				{/* element={<Profile email="test@test.com" numPosts="4" />} */}
				{/* <Route path="*" exact element={<Error />} /> */}
			</Routes>
		</div>
	);
}

export default App;
