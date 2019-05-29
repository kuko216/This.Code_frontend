import axios from "axios";

export const getList = ({token}) =>
  axios.get("http://localhost:4000/api/problem/getList",
  {
    headers: {
        'token': token
    }
  });

export const detailProblem = ({ index }) =>
  axios.post("http://localhost:4000/api/problem/detail",
  { index }
);

export const ShowLog = () =>
  axios.get("http://localhost:4000/api/problem/showLog", {
});