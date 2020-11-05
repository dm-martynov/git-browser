import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RepoListPage from "./pages/RepoListPage";
import RepoReadMePage from "./pages/RepoReadMePage";

function App() {
  return (
    <BrowserRouter>
      <div id="app-wrapper">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:userName" component={RepoListPage} />
        <Route
          exact
          path="/:userName/:repositoryName"
          component={RepoReadMePage}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
