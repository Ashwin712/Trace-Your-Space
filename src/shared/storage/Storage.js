import Logger,{LogLevel} from "../loggers/logger";
const REFRESH_TOKEN = 'QAZXSWEDC';
// const store= configureStore();

export const onSignIn = async (token) => {
  try {
    await localStorage.setItem("@MyApp_key", token);
    Logger(LogLevel.INFO,'User token has been set');
  } catch (e) {
  }
};

export const getToken = async (path) => {
  try { 
    const token = await localStorage.getItem("@MyApp_key");
    if (token !== null) {
      return token;
    } else {
      return null;
    }
  } catch (e) {
    // console.error("getData error" + e);
  }
};

export const isSignedIn = async () => {
  try {
    const token = (await localStorage.getItem("@MyApp_key")) || null;
    // if (token !== null && token.length > 10) {
    //   return true;
    // } else {
    //   return false;
    // }
    Logger(LogLevel.INFO,'Returns isSignedIn flag a boolean value of True or false based on the token');
    return token !== null && token.length > 10 ;
  } catch (e) {
    // console.error("getData error" + e);
  }
};

export const onSignOut = async () => {
  try {
    await localStorage.removeItem("@MyApp_key");
    await localStorage.removeItem(REFRESH_TOKEN);
    Logger(LogLevel.INFO, 'Removes user token - SIGN OUT');
    //  await localStorage.removeItem('persist:root')
  } catch (e) {
    // console.error("remove Value error" + e);
  }
};


export const setRefreshToken = async (refreshToken) => {
  try {
    await localStorage.setItem(REFRESH_TOKEN, refreshToken);
  } catch (e) {
    // saving error
  }
};

/**
 *Returns refreshToken from AsyncStorage
 */
export const getRefreshToken = async () => {
  try {
    const value = await localStorage.getItem(REFRESH_TOKEN);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
  return '';
};