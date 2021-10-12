import React from "react";
import "./Nav.css";
import CopyEmail from "./CopyEmail/CopyEmail";
import gitHubIcon from "../../Content/icons/github-icon.png";
import linkedInIcon from "../../Content/icons/linkedin-icon.png";

const Nav = () => {
	return (
		<div id="mainNav">
			<div className="navSection"id="section1"></div>
			<div className="navSection"id="section2">
			<div id="nameTitle">
				<h1 id="name">Jonah Vimahi</h1>
			</div>
			</div>
			<div className="navSection"id="section3">
			<div id="icons">
			<div id="divGitHub">
			<a
				href="https://github.com/jonahvimahi"
				id="logoLinkGitHub"
				className="logoLink"
				target="_blank"
				rel="noreferrer"
			>
				<img src={gitHubIcon} alt="GitHub Logo" className="navLogo" />
			</a>
			</div>
			<div id="divLinkedIn">
			<a
				href="https://www.linkedin.com/in/jonah-vimahi/"
				id="logoLinkLinkedIn"
				className="logoLink"
				target="_blank"
				rel="noreferrer"
			>
				<img src={linkedInIcon} alt="LinkedIn Logo" className="navLogo" />
			</a>
			</div>
			<div id="divEmail">
			<CopyEmail />
			</div>
			</div>
			</div>

			</div>
	);
};
export default Nav;
