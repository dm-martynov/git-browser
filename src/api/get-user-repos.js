import axios from "axios";

export const getUserRepos = (userName) => {
  return axios
    .get(`https://api.github.com/users/${userName}/repos`)
    .then((response) => response.data);
};
