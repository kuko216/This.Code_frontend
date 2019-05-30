import axios from "axios";

export const getList = ({token}) =>
  axios.get("http://45.77.14.49:4000/api/problem/getList",
  {
    headers: {
        'token': token
    }
  });

export const detailProblem = ({ index }) =>
  axios.post("http://45.77.14.49:4000/api/problem/detail",
  { index }
);

export const ShowLog = () =>
  axios.get("http://45.77.14.49:4000/api/problem/showLog");