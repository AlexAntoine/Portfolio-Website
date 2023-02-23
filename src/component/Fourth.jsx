import React from "react";

const Contact = () =>{

    return (
        <div className="s2" id="one">
            <div className="main-container">
                <h3>Get In Touch</h3>

                <form action="/email" method="POST"  id="contact-form">
                    <label for="">Name</label>
                    <input type="text" className="input-field" name="name"/>

                    <label>Subject</label>
                    <input type="text" name="subject" className="input-field"/>

                    <label>Email</label>
                    <input type="text" name="email" className="input-field"/>

                    <label>Message</label>
                    <textarea className="input-field" name="message"></textarea>
                    <input type="submit" value="send" id="submit-btn"></input>
                </form>

            </div>

        </div>
    )

}

export default Contact;