import React from "react";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Contact from "../Contact/Contact";
import './Body.css'
function Body() {
	return (
        <div id="body">
            <Projects />
            <Skills />
            <About />
            <Contact />
        </div>
	);
}
export default Body;