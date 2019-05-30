import axios from "axios";

export const localRegister = ({ id, username, password, description }) =>
  axios.post("http://45.77.14.49:4000/api/auth/register", {
    id,
    username,
    password,
    description
  });
export const localLogin = ({ id, password }) =>
  axios.post("http://45.77.14.49:4000/api/auth/login", { id, password });

export const checkStatus = ({ token }) =>
  axios.get("http://45.77.14.49:4000/api/auth/showUser",
  {
      headers: {
          'token': token
      }
  });

export const ranking = () =>
  axios.get("http://45.77.14.49:4000/api/auth/ranking");