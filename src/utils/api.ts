import axios from "axios";

const mhwApi = axios.create({
  baseURL: "https://mhw-db.com/",
});

export default mhwApi;
