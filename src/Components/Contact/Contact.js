import React from "react";
import "./Contact.css";

function Contact() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	}
	function handleSubmit(e) {
		e.preventDefault();
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", name, email, message }),
		})
			.then(() => alert("Message Sent!"))
			.catch((error) => alert(error));
	}
	return (
		<div id="contactPage">
			<div className="sectionTitle">
				<h1>Contact</h1>
			</div>
			<div id="contactBody">
				<div id="contactForm">
					<form netlify name="contact" onSubmit={handleSubmit}>
						<h2>Contact me directly</h2>
						<div className="formInput" id="name">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="formInput" id="email">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="formInput" id="message">
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
				<div id="personal">
					<h3>Jonah Vimahi</h3>
                    <p>Lehi, Utah 84043</p>
                    <p>webdevjonah@gmail.com</p>
                    <p>(801)-707-8773</p>
				</div>
			</div>
		</div>
	);
}
export default Contact;
