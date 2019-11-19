import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Form.css';

const Form = () => {
  return(
    <section>
    <form name="contact" method="post" action="/mission" data-netlify="true" data-netlify-honeypot="bot-field">

        <input type="hidden" name="bot-field" />

        <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required/>
        </div>
        <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required/>
        </div>
        <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" required></textarea>
        </div>
        <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Clear" /></li>
        </ul>
    </form>
</section>
    
  )
}
export default Form