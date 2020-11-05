import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <div id="repository-name">User name: {props.userName}</div>
      <Link to="/" id="go-back">
        Go Home
      </Link>
    </div>
  );
}
