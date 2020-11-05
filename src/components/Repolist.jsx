import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserRepos } from "../api/api";

export default function RepositoryList(props) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getUserRepos(props.userName).then((data) => setRepos(data));
  }, [props.userName]);
  return (
    <div>
      {repos.map((repo) => {
        return (
          <div key={repo.id}>
            <Link to={`/${props.userName}/${repo.name}`}>{repo.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
