import React from "react";
const About = () => {
  return (
    <>
      {" "}
      <article>
        <h3>About</h3>
        <p>
          I am a full stack web developer who utilises the latest semantic and
          accessible web design principles, CSS3 styling and Javascript (inc
          ES6) functionality. My tool of choice for front end development is
          React and I am in my element building complex scalable multi component
          systems using clean reusable code, implementing APIs, managing props
          as well as using separate state management tools (Redux).
        </p>
        <p>
          On the server side I develop and deploy functions using Node and
          Express.js including creating API routes, creating and writing code to
          interact with databases such as SQL and MongoDB in an efficient and
          secure manner, and implementing server side mail functions.
        </p>
        <p>
          I am a graduate of
          {` `}
          <a target="_blank" rel="noreferrer" href="https://www.thejump.tech/">
            The Jump Digital School
          </a>
          's full stack software developer course as well as a bachelor of
          engineering (BEng), and have been experimenting with code and
          technology in one form or another since the 1980s. I am a lifelong
          tinkerer, coder, gamer, and builder of awesome things. To see some
          examples of my work please view my portfolio on the home page of this
          site.
        </p>
      </article>
    </>
  );
};

export default About;
