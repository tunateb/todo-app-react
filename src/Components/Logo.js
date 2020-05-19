import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <img className="logo" alt="logo" src={require("../img/logo.png")}></img>
    );
  }
}

export default Logo;
