import React from "react";
import SearchBar from "../components/SearchBar";
import Repolist from "../components/Repolist";
import Header from "../components/Header1";

export default function RepoListPage(props) {
  return (
    <div>
      <Header userName={props.match.params.userName} />
      <SearchBar />
      <Repolist userName={props.match.params.userName} />
    </div>
  );
}
