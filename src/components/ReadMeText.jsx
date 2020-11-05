import React, { useEffect, useState } from "react";
import { getRepoReadMe } from "../api/api";
import ReactMarkdown from "react-markdown";

export default function ReadMeText(props) {
  const [readMe, setReadMe] = useState([]);
  useEffect(() => {
    getRepoReadMe(props.userName, props.repositoryName).then((data) =>
      setReadMe(data)
    );
  }, [props.userName, props.repositoryName]);

  return (
    <div className="description">
      <ReactMarkdown source={readMe} />
    </div>
  );
}
