import React from "react";

const SectionTwo =()=>{
    return(
       <div className="s2">
            <div className="main-container">
                <div className="about-wrapper">
                        <div className="about-me">
                            <h4>More about me</h4>

                            <p>
                            I Love watching anime and taking naps. This portfolio site is a working progress so don't judge too harshly.
                            Recently, Heroku has discontinued its free tier. Unfortunately that means some of the projects featured here may not work.
                            I have numerous projects I want to feature on this site but will have to be selective due to free hosting no longer being available.
                            Please be patient while I find alternatives. Thank You!!
                            </p>

                            <div style={{borderTop: "2px solid #fff", marginLeft:20, marginRight:20}}></div>

                            <h4>Top Expertise</h4>

                            <p>What i'm good at <a href="Alex-Resume.pdf" target="_blank">Download Resume</a> </p>

                            <div id="skills">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                </ul>

                                <ul>
                                <li>Node.js</li>
                                <li>Mongoose</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Heroku</li>
                                </ul>
                        </div>
                    </div>
                    <div className="social-links">
                        <img id="social-img" src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80" alt="Github"/>
                        <h3>Find my latest projects on Github</h3>

                        <a href="https://github.com/AlexAntoine" target="_blank">Github</a>
                        <br></br>
                    </div>
                    
                </div>
            </div>
       </div>
    )
}

export default SectionTwo;