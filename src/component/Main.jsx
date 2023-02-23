import React from "react";

function importStyle(){
//import style when button is clicked
//im going to have to use setState to change the import
}

const SectionOne = ()=>{
    return(
        <div className='s1'>
        <div className="main-container">
            <div className="greeting-wrapper">
                <h1>Hello I'm Don-Alex</h1>
            </div>
            
            <div className="intro-wrapper">
                <div className="nav-wrapper">
                    <div className="dots-wrapper">
                        <div id="dot-1" className="browser-dots"></div>
                        <div id="dot-2" className="browser-dots"></div>
                        <div id="dot-3" className="browser-dots"></div>
                    </div>
                    <ul id="navigation">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="left-column">
                    <img id="profile-pic" src="https://images.unsplash.com/photo-1537824598505-99ee03483384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Profile Picture"></img>
                    <h5>Personalize Theme</h5>

                    <div id="theme-options-wrapper">

                        <div onClick={importStyle} data-mode="light" className="theme-dot" id="light-mode"></div>
                        <div onClick={importStyle} data-mode="blue" className="theme-dot" id="blue-mode"></div>
                        <div onClick={importStyle} data-mode="green" className="theme-dot" id="green-mode"></div>
                        <div onClick={importStyle} data-mode="purple" className="theme-dot" id="purple-mode"></div>
                    </div>

                    <p id="setting-note">*Theme options will be saved for your next visit</p>
                </div>

                <div className="right-column">
                    <div id="preview-shadow">
                        <div id="preview">
                            <div id="corner-tl" className="corner"></div>
                            <div id="corner-tr" className="corner"></div>
                            
                            <h3>What I Do </h3>
                            <p>Aspiring software developer that enjoys building new things</p>

                            <div id="corner-br" className="corner"></div>
                            <div id="corner-bl" className="corner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SectionOne;