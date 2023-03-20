import axios from "axios";

const axiosClient = axios.create();

if (process.env.GITHUB_PERSONAL_TOKEN) {
  axiosClient.defaults.headers.common.Authorization = `BEARER ${process.env.GITHUB_PERSONAL_TOKEN}`;
}

export { axiosClient };
