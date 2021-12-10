import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SiteStateObj from "./Components/SiteStateObj";
// Routes

import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<SiteStateObj />
			{/* SiteStateObject renders the NAV, App.js and Footer */}
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
