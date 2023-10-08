import axios from "axios";

const repository = axios.create({
  baseURL: "http://a60fdf61-da08-42bc-8f6f-5c0cb483e367.mock.pstmn.io",
  withCredentials: false,
});

export default repository;
