import React from "react";

const Progressbar = ({ progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "70%",
    border: "1px solid white",
    backgroundColor: "#18122D",
    // marginTop: "20px",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#A644EE",
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "white",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default Progressbar;
