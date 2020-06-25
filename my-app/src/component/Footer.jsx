import React from "react";
import { Link } from "react-router-dom";

import facebook from "./assets/social/facebook-white.svg";
import twitter from "./assets/social/twitter-white.svg";
import instagram from "./assets/social/instagram-white.svg";

export default function Footer() {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <footer>
      <div className="footer">
        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          Terms and Condition
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          Collection Statement
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          Help Desk
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          Management Account
        </Link>
        <div className="copyright">SOG. All Right Reserved</div>
        <div className="socialicons">
          <img className="facebook" src={facebook} alt="facebook" />
          <img className="twitter" src={twitter} alt="twitter" />
          <img className="instagram" src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
}
