import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const padding = {
    paddingRight: 10
  };
  const text = {
    borderStyle: "ridge",
    display: "inline",
    padding: 1,
    textDecoration: "none"
  };
  return (
    <div>
      <Link style={padding} to="/">
        <p style={text}>Home</p>
      </Link>
      <Link style={padding} to="/bubble">
        <p style={text}>Bubble</p>
      </Link>
      <Link style={padding} to="/insertion">
        <p style={text}>Insertion</p>
      </Link>
      <Link style={padding} to="/selection">
        <p style={text}>Selection</p>
      </Link>
      <Link style={padding} to="/quick">
        <p style={text}>Quick</p>
      </Link>
      <Link style={padding} to="/merge">
        <p style={text}>Merge</p>
      </Link>
      <Link style={padding} to="/heap">
        <p style={text}>Heap</p>
      </Link>
      <Link style={padding} to="/counting">
        <p style={text}>Counting</p>
      </Link>
    </div>
  );
};

export default Menu;
