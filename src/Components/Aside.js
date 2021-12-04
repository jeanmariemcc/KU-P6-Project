import React from "react";

import AsideLinks from "./AsideLinks";

class Aside extends React.Component {
	render() {
		// console.log(titles);
		return (
			<aside className="Aside">
				<h4>Dr. Hartwig's Blog Articles</h4>
				<AsideLinks />
			</aside>
		);
	}
}

export default Aside;
