import axios, { AxiosRequestConfig } from "axios";
import history from "../../components/Routes/history";
import Logger, { LogLevel } from "../loggers/logger";
import * as ApiConstants from "../configure/Config";
import * as storage from "../storage/Storage";
import ErrorCodes from "../../components/Error/ErrorCodes";
import { reportAnIssueAction } from "../../redux/actions/managerActions";

const FORM_DATA = [ApiConstants.FILE_UPLOAD];

const RETRY = 1;

const PRE_SIGNIN = [ApiConstants.REGISTER_TENANT, ApiConstants.RENEW_SUBSCRIPTION, ApiConstants.GOOGLE_SIGNIN, ApiConstants.AUTH_TOKEN];

export const requestInterceptor = async (config) => {
  const { url, data, headers } = config;
  const isFormData = FORM_DATA.includes(url);
  const token = await storage.getToken();
  console.log(url, "", data, "", headers);

  const configUpdate = {
    headers: {
      Accept: "application/json",
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      ...(!PRE_SIGNIN.includes(url) && {
        Authorization: token,
      }),
    },
    data: data,
  };
  if (url === ApiConstants.DOWNLOAD_PDF) return { ...config, retry: RETRY };
  return { ...config, ...configUpdate, retry: RETRY };
};

export const requestErrorInterceptor = (error) => Promise.reject(error);

export const responseInterceptor = (AxiosResponse) => (AxiosResponse.data ? AxiosResponse.data : AxiosResponse);

// export const responseErrorInterceptor = (error) => {
//   Logger(LogLevel.WARN,"From Response Error Interceptor: Api call has failed")
//   const status = error
//     history.push({ pathname: "/ErrorPage", status: status });
//     return Promise.reject(error);
// };

const getNewToken = async () => {
  try {
    const apiRefreshToken = await storage.getRefreshToken();
    const apiAccessToken = await storage.getToken();
    const {
      data: { accessToken, refreshToken },
    } = await axios.post(ApiConstants.AUTH_TOKEN, {
      accessToken: null,
      refreshToken: apiRefreshToken,
    });
    await storage.onSignIn(accessToken);
    if (refreshToken) await storage.setRefreshToken(refreshToken);
    return accessToken;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const responseErrorInterceptor = async (error) => {
  const { response, config } = error;

  console.log(response, "", config);
  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    console.log("hello");
    // Reject with the error
    return Promise.reject(error);
  }
  if (response === undefined) history.push({ pathname: "/ErrorPage", status: { ...response, message: "timeout of 2000ms exceeded" } });

  // Increase the retry count
  config.__retryCount += 1;

  if (config.url === ApiConstants.AUTH_TOKEN || response.data.message === "Unauthorized") {
    await storage.onSignOut();
    history.push("/");
    return Promise.reject(response.data);
  }
  // New request with new token
  if (response.status === 401) {
    const token = await getNewToken();
    config.headers.Authorization = token;

    return axios(config);
  }

  history.push({ pathname: "/ErrorPage", status: response.status });
  return Promise.reject(error);
};
