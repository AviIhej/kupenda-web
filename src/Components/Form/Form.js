import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Form;
