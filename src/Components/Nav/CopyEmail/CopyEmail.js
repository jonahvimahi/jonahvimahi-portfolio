import React, { useEffect, useState } from "react";
import emailIcon from "../../../Content/icons/email-icon.png";
import "./CopyEmail.css";

function CopyEmail() {
	const [copySuccessMessage, setCopySuccessMessage] = useState("");
	const [instructions, setInstructions] = useState("");
	const email = "webdevjonah@gmail.com";

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopySuccessMessage("");
		}, 2000);
		return () => clearTimeout(timer);
	}, [copySuccessMessage]);

	function copyEmail() {
		navigator.clipboard.writeText(email);
		setCopySuccessMessage(`Email copied to clipboard!`);
		setInstructions("");
	}
	function showInstruction() {
		if (copySuccessMessage) {
			return;
		}
		setInstructions(`Click to copy email!`);
	}
	function hideInstruction() {
		setInstructions("");
	}

	return ( 
		<div id="navEmail">
			<div id="divEmail">
				<p
					onClick={copyEmail}
					onMouseOver={showInstruction}
					onMouseOut={hideInstruction}
					type="email"
					id="logoLinkEmail"
					className="logoLink"
					target="_blank"
					rel="noreferrer"
				>
					<img src={emailIcon} alt="Email Logo" className="logo" />
				</p>
			</div>

			<p id="emailMessage">
				{copySuccessMessage} {instructions}
			</p>
		</div>
	);
}
export default CopyEmail;
