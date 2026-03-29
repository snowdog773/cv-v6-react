import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_unbrk9d", "template_ilhaly7", form.current, {
        publicKey: "u_g8_7UwyRjyDpWIP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/formSuccess");
        },
        (error) => {
          console.log("FAILED...", error.text);
          navigate("/formFail");
        },
      );
  };

  return (
    <>
      {" "}
      <article>
        <h3>Contact</h3>

        <form className="contact" ref={form} onSubmit={(e) => sendForm(e)}>
          <label htmlFor="name">
            Name <span>(reqd)</span>
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            // onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="org">Organisation</label>
          <input
            type="text"
            id="org"
            name="user_org"
            // onChange={(e) => setOrg(e.target.value)}
          />

          <label htmlFor="phone">Telephone</label>
          <input
            type="phone"
            id="phone"
            name="user_phone"
            // onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="email">
            Email <span>(reqd)</span>
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            // onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">
            Type your message here <span>(reqd)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="10"
            cols="60"
            required
            // onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="buttonWrapper">
            <div className="button">
              <button
                type="submit"
                style={{ all: "unset", cursor: "pointer", width: "100%" }}
              >
                Submit
              </button>
            </div>
            {/* <div className="button"></div> */}

            <p className="mailLink">
              Or email me at{" "}
              <a href="mailto:jonpitans@gmail.com">jonpitans@gmail.com</a>
            </p>
          </div>
        </form>
      </article>
    </>
  );
};

export default Contact;
