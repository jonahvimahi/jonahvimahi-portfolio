import React from "react";
import "./Nav.css";
import CopyEmail from "./CopyEmail/CopyEmail";
import gitHubIcon from "../../Content/icons/github-icon.png";
import linkedInIcon from "../../Content/icons/linkedin-icon.png";

const Nav = () => {
	return (
		<div className="mainNav">
			<a
				href="https://github.com/jonahvimahi"
				id="logoLinkGitHub"
				className="logoLink"
				target="_blank"
				rel="noreferrer"
			>
				<img src={gitHubIcon} alt="GitHub Logo" className="logo" />
			</a>
			<a
				href="https://www.linkedin.com/in/jonah-vimahi/"
				id="logoLinkLinkedIn"
				className="logoLink"
				target="_blank"
				rel="noreferrer"
			>
				<img src={linkedInIcon} alt="LinkedIn Logo" className="logo" />
			</a>
			<CopyEmail />
			

			</div>
	);
};
export default Nav;
