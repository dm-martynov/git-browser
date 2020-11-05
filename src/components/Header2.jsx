import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <div className="repository-name">User name: {props.userName}</div>
      <div>
        <Link to="/" className="go-back">
          Go Home
        </Link>
      </div>
      <div>
        <Link to={"/" + props.userName} className="go-repository-list">
          Go to Repos List
        </Link>
      </div>
    </div>
  );
}
