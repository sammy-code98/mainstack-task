import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false,
});

api.interceptors.request.use(
  (request) => {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error?.response?.status === 400) {
      alert("error occured");
    }
    return Promise.reject(error);
  }
);
export default api;
