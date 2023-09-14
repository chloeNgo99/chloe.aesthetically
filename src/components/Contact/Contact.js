import React from "react";
import "./Contact.css";

const Contact = () => {
  function submitForm() {
    document.getElementById("contact_form").reset();
  }
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">✨Get In Touch✨</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's get to know each other</h3>
          <p className="contact_details">Shoot me an email! 😬</p>
        </div>

        {/* <form className="contact_form" method="POST" action="https://formsubmit.co/7057a4e77b5519ef11231adb4a236cd9">
          <div className="contact_form_group">
            <div className="contact_form_div">
              <input type="text" className="contact_form_input" placeholder='Your name'/>
            </div>

            <div className="contact_form_div">
              <input type="email" className="contact_form_input" placeholder='Your email'/>
            </div>
          </div>
          <div className="contact_form_div">
            <input type="text" className="contact_form_input" placeholder='Your subject'/>
          </div>

          <div className="contact_form_div contact_form_area">
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="10" 
              className='contact_form_input' 
              placeholder='Your message'>
            </textarea>
          </div>
          <button onclick="submitForm()" type="submit" name="submit" className="btn">SEND!</button>
        </form> */}
        <form
          className="contact_form"
          method="POST"
          action="https://formsubmit.co/7057a4e77b5519ef11231adb4a236cd9"
        >
          <div className="contact_form_group">
            <div className="contact_form_div">
              <input
                type="text"
                className="contact_form_input"
                placeholder="Your name"
                name="name" // Make sure this matches the field name expected by FormSubmit
              />
            </div>

            <div className="contact_form_div">
              <input
                type="email"
                className="contact_form_input"
                placeholder="Your email"
                name="email" // Make sure this matches the field name expected by FormSubmit
              />
            </div>
          </div>
          <div className="contact_form_div">
            <input
              type="text"
              className="contact_form_input"
              placeholder="Your subject"
              name="subject" // Make sure this matches the field name expected by FormSubmit
            />
          </div>

          <div className="contact_form_div contact_form_area">
            <textarea
              name="message" // Make sure this matches the field name expected by FormSubmit
              cols="30"
              rows="10"
              className="contact_form_input"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" name="submit" className="btn">
            SEND!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
