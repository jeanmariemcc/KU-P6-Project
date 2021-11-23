import React from "react";

class Footer extends React.Component {
	render() {
		// console.log(links);
		return (
			<footer className="Footer">
				{/* <footer> */}
				<div id="parent">
					<div id="left">
						<h2>CONTACT US</h2>
						<p>Request your free evaluation today!</p>
						<p>
							<br />
							We’re here for you when you need us. Call us to
							schedule an appointment or use the contact form
							below and we’ll get back to you as soon as possible.
						</p>
						<p>Boynton Beach, FL 33435</p>
						<p>info@atlashealthandwellness.com</p>
						<p>(954) 93-ATLAS</p>
						<p>
							<a
								href="http://instagram.com/atlas.health.and.wellness"
								target="_blank"
								rel="noopener"
							>
								<img
									align="center"
									class=".instagramlogo"
									src="./img/instagram-white-on-black.webp"
									alt="Instagram logo"
								/>
							</a>
						</p>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
