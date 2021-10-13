import React from "react";
import '../../reset.css'
import "./Skills.css";
import javascriptLogo from "../../Content/logos/javascript-logo.png";
import htmlLogo from "../../Content/logos/html-logo.png";
import cssLogo from "../../Content/logos/css-logo.png";
import reactLogo from "../../Content/logos/react-logo.png";
import reduxLogo from "../../Content/logos/redux-logo.png"
import nodeLogo from "../../Content/logos/node-logo.png";
import gitLogo from "../../Content/logos/git-logo.png";
import postgresLogo from "../../Content/logos/postgres-logo.png";

function Skills() {
	return (
		<div className="skillsPage">
			<div className="sectionTitle">
				<h1>Skills</h1>
			</div>
			<div className="skillsList">
				<div id="test1">
				<div className="skillDiv" id="javascriptSkill">
					<img className="logo" src={javascriptLogo} alt="JavaScript Logo" />
					<p className="logoText">JavaScript</p>
				</div>
				<div className="skillDiv" id="htmlSkill">
					<img src={htmlLogo} alt="HTML Logo" className="logo" />
					<p className="logoText">HTML</p>
				</div>
				<div className="skillDiv" id="cssSkill">
					<img src={cssLogo} alt="CSS Logo" className="logo" />
					<p className="logoText">CSS</p>
				</div>

				<div className="skillDiv" id="nodeSkill">
					<img src={nodeLogo} alt="Node Logo" className="logo" />
					<p className="logoText">Node</p>
				</div>
				</div>
				<div id="test2">
				<div className="skillDiv" id="reactSkill">
					<img src={reactLogo} alt="React Logo" className="logo" />
					<p className="logoText">React</p>
				</div>
				<div className="skillDiv" id="reduxSkill">
					<img src={reduxLogo} alt="Redux Logo" className="logo" />
					<p className="logoText">Redux</p>
				</div>
				<div className="skillDiv" id="postgresSkill">
					<img src={postgresLogo} alt="Postgres Logo" className="logo" />
					<p className="logoText">Postgres</p>
				</div>
				<div className="skillDiv" id="gitSkill">
					<img src={gitLogo} alt="GIT Logo" className="logo" />
					<p className="logoText">Git</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Skills;
