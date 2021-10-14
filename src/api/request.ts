import axios from "axios";

const getBaseURL = () => {
  let baseURL: string | undefined = `/`;
  if (process.env.NODE_ENV === "production") {
    baseURL = process.env.VUE_APP_BASE_API;
  }
  return baseURL;
};

const service = axios.create({
  baseURL: getBaseURL(),
  withCredentials: false,
  timeout: 15000, // request timeout
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status === 200) {
      return res;
    } else {
      return Promise.reject(res);
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

const processData = (data: any) => {
  for (const key in data) {
    if (Object.prototype.toString.call(data[key]) === "[object Object]") {
      if (Object.keys(data[key]).length === 0) {
        delete data[key];
      } else {
        processData(data[key]);
      }
    } else if (
      data[key] === undefined ||
      data[key] === null ||
      data[key] === ""
    ) {
      delete data[key];
    }
  }
  return data;
};

const http = (config: any) => {
  if (config.method.toLowerCase() === "post") {
    config.data = processData(config.data);
  } else {
    config.params = config.data;
  }
  return service(config);
};

export default http;
