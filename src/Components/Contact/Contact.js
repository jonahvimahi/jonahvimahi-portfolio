import React from "react";

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
			<div>
				<form netlify name="contact" onSubmit={handleSubmit}>
					<h2>Hire Me</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
						natus praesentium. Dolorem excepturi inventore, dolores possimus
						unde vero eos soluta consectetur quidem. Sint distinctio quos sequi.
						Temporibus ipsam aperiam doloremque.
					</p>
					<div>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
export default Contact;
