import React from "react";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "../About/About";
import './Body.css'
function Body() {
	return (
        <div id="body">
            <Projects />
            <Skills />
            <About />
        </div>
	);
}
export default Body;