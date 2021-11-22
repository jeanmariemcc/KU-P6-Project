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
					<div id="right">
						<p display="none"></p>
						<p display="none"></p>

						<form>
							<p display="none"></p>

							<div id="parent">
								<p display="none"></p>

								<div id="left">
									<label>Name</label>
									<input
										type="text"
										name="name"
										required="yes"
										placeholder="Enter your name"
										maxlength="100"
										value=""
									/>
								</div>
								<div id="right">
									<label>Email</label>
									<input
										type="email"
										name="email"
										required=""
										placeholder="Enter your email"
										pattern="^.+@.+\.[a-zA-Z]{2,63}$"
										maxlength="250"
										value=""
									/>
								</div>
							</div>
							<p display="none"></p>

							<div id="parent">
								<div id="left">
									<label>Phone</label>
									<input
										type="tel"
										name="phone"
										required=""
										placeholder="Enter your phone number"
										maxlength="50"
										value=""
									/>
								</div>
								<div id="right">
									<label>Address</label>
									<input
										type="text"
										name="address"
										placeholder="Enter your address"
										maxlength="250"
										value=""
									/>
								</div>
								<p display="none"></p>
							</div>
							<p display="none"></p>
							<div>
								<label>Subject</label>
								<input
									type="text"
									name="subject"
									placeholder="Type the subject"
									value=""
								/>
							</div>
							<p display="none"></p>
							<div>
								<label>Message</label>
								<textarea placeholder="Type your message here..."></textarea>
							</div>
							<p display="none"></p>

							<button>
								<span>Submit</span>
							</button>
							<p>
								<span>Thanks for submitting!</span>
							</p>
						</form>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
