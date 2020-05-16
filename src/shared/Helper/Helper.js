import { Form } from "antd";
import axios, { post } from "axios";
import Logger, { LogLevel } from "../loggers/logger";
import { getToken } from "../storage/Storage";

export const BASE_URL = window.location.origin + "/home/v1/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 10000;
axios.interceptors.request.use(
  (config) =>
    // console.log(JSON.stringify(config));
    config,
  (error) => Promise.reject(error)
);
axios.interceptors.response.use(
  (response) =>
    // console.log(JSON.stringify(response.data));
    response.data,
  (error) => {
    Promise.reject(error);
  }
);

export const startFetch = async (config) => {
  try {
    const res = await axios(config);
    console.log(res);
    Logger(LogLevel.INFO, "From Api Client: Response From the Api is Success");
    return res;
  } catch (e) {
    Logger(LogLevel.WARN, "From Api Client: Api call has failed");
    return Promise.reject(e);
  }
};

/**
 * @description that makes an api call with all required headers and other payload
 * @param {*} path path of the api call
 * @param {*} params request payload of the api call
 * @param {*} method method of the api
 * @param {*} token boolean value which specifies the requirement of token
 */
export default async function Api(path, params, method, token) {
  Logger(
    LogLevel.INFO,
    "From Api client: Starts the Request for " + path + " Api"
  );
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token && {
        Authorization: await getToken(),
      }),
    },
    method,
    ...(params && {
      data: JSON.stringify(params),
    }),
  };
  return startFetch({ url: path, ...options });
}

export const Api1 = (path, params, method) => {
  return getToken().then((jwt) => {
    let options = {
      headers: {
        Accept: "*/*",
        Authorization: jwt,
      },
      method: method,
      Form,
    };
    const formData = new FormData();
    for (let key in params) {
      formData.append(key, params[key]);
    }
    return post(path, formData, options);
  });
};

export const downloadApi = (path, params, method, require) => {
  return getToken().then((token) => {
    let options;
    options = {
      headers: {
        Accept: "application/pdf",
        //"Content-type": "application/pdf",
        "Content-Type": "application/json",
        ...(require && { Authorization: token }),
      },

      method: method,
      responseType: "blob",
      ...(params && { body: JSON.stringify(params) }),
    };
    return startFetch({ url: path, ...options });
  });
};
