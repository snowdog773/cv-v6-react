import React, { useState } from "react";
const Contact = () => {
  const [name, setName] = useState();
  const [org, setOrg] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendForm = () => {
    if (name && email && message) {
      fetch("https://portfolioformapi.pitans.co.uk/formHandler", {
        method: "POST",
        body: JSON.stringify({
          name,
          org,
          phone,
          email,
          message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(
        alert(
          "Form submission successful. I aim to reply to messages within 24 hours"
        )
      );
    } else {
      alert("please complete all required fields");
    }
  };

  return (
    <>
      {" "}
      <article>
        <h3>Contact</h3>

        <form className="contact">
          <label htmlFor="name">
            Name <span>(reqd)</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="org">Organisation</label>
          <input
            type="text"
            id="org"
            name="org"
            onChange={(e) => setOrg(e.target.value)}
          />

          <label htmlFor="phone">Telephone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="email">
            Email <span>(reqd)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="buttonWrapper">
            <div className="button" onClick={() => sendForm()}>
              Submit
            </div>

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
