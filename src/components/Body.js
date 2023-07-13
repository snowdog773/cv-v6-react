import React from "react";
import { Routes, Route } from "react-router-dom";
import headshot from "../assets/jon.png";
import { portfolioList } from "../constants/portfolioList";
import PortfolioItem from "./PortfolioItem";
import About from "../components/About";
import Contact from "../components/Contact";

const Body = () => {
  return (
    <>
      <div className="background">
        <div className="opacity">
          <div className="body">
            <div className="content">
              <div className="hero">
                <img src={headshot} alt="Jon Pitans"></img>
                <div className="h2Header">
                  {" "}
                  <h2>Web Developer Portfolio</h2>
                </div>
              </div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="portfolioWrapper" id="portfolioAnchor">
                      {portfolioList.map((e, index) => (
                        <PortfolioItem
                          name={e.name}
                          image={e.image}
                          url={e.url}
                          github={e.github}
                          backendGithub={e.backendGithub}
                          description={e.description}
                          tags={e.tags}
                          key={index}
                        />
                      ))}
                    </div>
                  }
                ></Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
