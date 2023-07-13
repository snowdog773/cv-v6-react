import React from "react";

const PortfolioItem = (props) => {
  return (
    <>
      <div className="portfolioBox">
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="portfolioThumb"
        >
          <img
            src={require(`../assets/thumbs/${props.image}`)}
            alt={props.name}
          ></img>
        </a>
        <div className="portfolioText">
          <div className="heading">
            <a href={props.url} target="_blank" rel="noreferrer">
              <h3>{props.name}</h3>
            </a>
          </div>
          <div className="description">
            <p>{props.description}</p>
          </div>
          <div className="sourceCode">
            {props.github && (
              <a href={props.github} target="_blank" rel="noreferrer">
                <span>Source Code</span>
              </a>
            )}
            {props.backendGithub && (
              <a href={props.backendGithub} target="_blank" rel="noreferrer">
                <span>Backend Source Code</span>
              </a>
            )}
          </div>
          <div className="tagsFrame">
            {props.tags.map((e, index) => (
              <div className="tagItem" key={index}>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
