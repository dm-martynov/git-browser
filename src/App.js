import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RepoListPage from "./pages/RepoListPage";
import RepoReadMePage from "./pages/RepoReadMePage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/:userName" render={() => <RepoListPage />} />
        <Route
          exact
          path="/:userName/:repositoryName"
          render={() => <RepoReadMePage />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
