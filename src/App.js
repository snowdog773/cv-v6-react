import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import "./styles/header.css";
import "./styles/body.css";
import "./styles/portfolio.css";
import "./styles/contact.css";
import "./styles/footer.css";

// import Landing from "./components/Landing";

const App = () => {
  return (
    <>
      <Header />

      <Body />

      <Footer />
    </>
  );
};

export default App;
