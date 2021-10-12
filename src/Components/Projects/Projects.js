import React from "react";
import gitHubIcon from "../../Content/icons/github-icon.png";
import olsoMusicScreenShot from "../../Content/images/olso-music-screenshot.png";
import weatherAppScreenShot from "../../Content/images/weather-app-screenshot.png";
import "./Projects.css";

function Projects() {
	return (
		<div className="projectsPage">
			<div className="sectionTitle">
				<h1>Projects</h1>
			</div>
			<div id="projects">
				<div className="projectBox" id="olsoMusic">
					<div className="projectTitle">
						<h1>Olso Music</h1>
					</div>
					<div id="olsoMusicScreenShotDiv">
						<img
							className="projectScreenShot"
							src={olsoMusicScreenShot}
							alt="ScreenShot"
						/>
					</div>
					<div id="projectLinks">
						<a
							href="https://olsomusic.herokuapp.com/"
							id="olsoMusicLink"
							target="_blank"
							rel="noreferrer"
						>
							Live Link
						</a>

						<a
							href="https://github.com/jonahvimahi/olso-music-new"
							id="olsoMusicGitHubLink"
							target="_blank"
							rel="noreferrer"
						>
							<img src={gitHubIcon} alt="GitHub Icon" className="gitHubIcon" />
							Code
						</a>
					</div>
					<div className="projectDescription">
						<h1>About</h1>
						<p>
							This site was made for a friend who was in need of a website. He
							requested a clean and simple UI with links to all his socials and
							a small showcase of his music.
						</p>
						<p>Made with: React | HTML | CSS | Node </p>
					</div>
				</div>
				<div className="projectBox" id="weatherApp">
					<div className="projectTitle">
						<h1>Weather Application</h1>
					</div>
					<div id="weatherScreenShotDiv">
						<img
							className="projectScreenShot"
							src={weatherAppScreenShot}
							alt="ScreenShot"
						/>
					</div>
					<div id="projectLinks">
						<a
							href="https://drive.google.com/file/d/1gVcAT3d5Fonvx5kaRlw04GQn2us5aGOL/view?usp=sharing"
							id="weatherAppDemo"
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>

						<a
							href="https://github.com/jonahvimahi/weatherApp"
							id="weatherAppGitHubLink"
							target="_blank"
							rel="noreferrer"
						>
							<img src={gitHubIcon} alt="GitHub Icon" className="gitHubIcon" />
							Code
						</a>
					</div>
					<div className="projectDescription">
						<h1>About</h1>
						<p>
							A simple weather application that can give information on the
							forecast of the day when ever a city or zip code is inputted in
							the search bar. Used Weather API to retrieve information.
						</p>
						<p>Made with: JavaScript | HTML | CSS | Node</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Projects;
