import axios from "axios";

export const getList = () =>
  axios.get("http://localhost:4000/api/problem/getList", {
  });

export const detailProblem = ({ index }) =>
  axios.post("http://localhost:4000/api/problem/detail", { index });