import axios from "axios";

export const localRegister = ({ id, username, password, description }) =>
  axios.post("http://localhost:4000/api/auth/register", {
    id,
    username,
    password,
    description
  });
export const localLogin = ({ id, password }) =>
  axios.post("http://localhost:4000/api/auth/login", { id, password });

export const checkStatus = ({ token }) =>
  axios.get("http://localhost:4000/api/auth/showUser",
  {
      headers: {
          'token': token
      }
  });

export const findUserById = ({ id }) => 
  axios.get("http://localhost:4000/api/auth/findUser/"+id);