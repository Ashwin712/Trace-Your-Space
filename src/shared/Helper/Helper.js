import history from "../../components/history";
import axios, {post} from "axios";
import { Form } from "antd";
import React from "react";
import { getToken } from "../storage/storage";
export const BASE_URL = window.location.origin + "/api/v1/";


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
    Promise.reject(error)
  }
);
export const startFetch = (config) => axios(config)
  .then((res) => res)

export default async function Api(path, params, method, token) {
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
export const Api1 =  (path, params, method) => {
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
    return post(path,formData,options );
  });
};
export const downloadApi = (path, params, method, require) => {
  try {
    return getToken().then((token) => {
      let options;
      options = {
        headers: {
          "Content-type": "application/json;Access-Control-Allow-Origin: *; charset=UTF-8",
          ...(require && { Authorization: token }),
        },

        method: method,
        ...(params && { body: JSON.stringify(params) }),
      };
      return axios(BASE_URL + path, options)
        .then((resp) => {
          // let clone = resp.clone();
          (async () => {
            // let resText = await clone.text();
          })();
          return resp;
        })
        .catch(function() {
          // console.error("error");
        });
    });
  } catch (error) {
  }
};