import axios from "axios";

export const getUserRepos = (userName) => {
  return axios
    .get(`https://api.github.com/users/${userName}/repos`)
    .then((response) => response.data);
};

export const getRepoReadMe = (userName, repositoryName) => {
  return axios
    .get(
      `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`
    )
    .then((response) => response.data);
};
