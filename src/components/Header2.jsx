import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <div id="repository-name">User name: {props.userName}</div>
      <div>
        <Link to="/" id="go-back">
          Go Home
        </Link>
      </div>
      <div>
        <Link to={"/" + props.userName} id="go-repository-list">
          Go to Repos List
        </Link>
      </div>
    </div>
  );
}
