import React from "react";
import Header from "../components/Header2";
import ReadMeText from "../components/ReadMeText";
import SearchBar from "../components/SearchBar";

export default function RepoReadMePage(props) {
  return (
    <div>
      <Header
        userName={props.match.params.userName}
        repositoryName={props.match.params.repositoryName}
      />
      <SearchBar />
      <ReadMeText
        userName={props.match.params.userName}
        repositoryName={props.match.params.repositoryName}
      />
    </div>
  );
}
