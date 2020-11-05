import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <div className="repository-name">User name: {props.userName}</div>
      <Link to="/" className="go-back">
        Go Home
      </Link>
    </div>
  );
}
