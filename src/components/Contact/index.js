import React, { useState } from "react";
import {
  Section,
  Title,
  ContactForm,
  Row,
  Row2,
  NameInput,
  LastNameInput,
  EmailInput,
  TextArea,
  MobileNoInput,
  Button,
} from "./contact.styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import "./contact.css";
import emailjs from "emailjs-com";

toast.configure();

const Contact = () => {
  const notify = () => {
    toast.error("All fields are required!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      className: "custom-toast",
    });
  };
  const notifyEmail = () => {
    toast.error("Wrong Format of Email!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      className: "custom-toast",
    });
  };
  const notifySuccess = () => {
    toast.error("Message had been sent!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
      className: "custom-toast",
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const { firstName, lastName, email, mobile, message } = formData;

  const handleChange = (evt) => {
    evt.preventDefault();
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(email) ||
      isEmpty(mobile) ||
      isEmpty(message)
    ) {
      notify();
    } else if (!isEmail(email)) {
      notifyEmail();
    } else {
      emailjs
        .sendForm(
          "Gmail",
          "template_10x2wz9",
          evt.target,
          "user_eBNTM8lSVBp8AovGp9frm"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      evt.target.reset();
      notifySuccess();
      setFormData({
        ...formData,
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    }
  };
  return (
    <Section id="contact">
      <Title>
        <h2>Let's Talk</h2>
        <p>
          I'm interested in freelance opportunities - especially ambitious and
          interesting projects. However, if you have other request or question,
          don't hesitate to use the form.
        </p>
      </Title>
      <ContactForm id="myform" onSubmit={handleSubmit} noValidate>
        <Row>
          <NameInput
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
          ></NameInput>
          <LastNameInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
          ></LastNameInput>
        </Row>
        <Row>
          <EmailInput
            type="email"
            name="email"
            placeholder="Email Adress"
            value={email}
            onChange={handleChange}
          ></EmailInput>
          <MobileNoInput
            type="text"
            name="mobile"
            placeholder="Mobile No."
            value={mobile}
            onChange={handleChange}
          ></MobileNoInput>
        </Row>
        <Row2>
          <TextArea
            placeholder="Message"
            name="message"
            value={message}
            onChange={handleChange}
          ></TextArea>
        </Row2>
        <Row2>
          <Button type="submit" value="Send"></Button>
        </Row2>
      </ContactForm>
    </Section>
  );
};

export default Contact;
