import React from "react";
import './About.css'
import '../Projects/Projects.css'
function About() {
	return (
		<div className="aboutpage">
			<div className="sectionTitle">
				<h1>About</h1>
			</div>
            <div id="aboutBody">
                <p className="aboutPara">Hello! My name is Jonah Vimahi.</p> 
                <p className="aboutPara">I am an aspiring Full-Stack Web Developer.</p> 
                <p className="aboutPara">I am eager to learn everything there is know about the world of code.</p> 
                <p className="aboutPara">Having gone through the Devmountain bootcamp in Lehi, Utah I am excited to fully immerse myself in the world of Software and Web Developement.</p>
            </div>
		</div>
	);
}
export default About;
