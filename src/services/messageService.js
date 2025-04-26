import axios from "axios";

const API_URL = "http://localhost:3000/api/new";

export const getMessages = () => {
  return axios.get(API_URL).then((res) => res.data);
};

