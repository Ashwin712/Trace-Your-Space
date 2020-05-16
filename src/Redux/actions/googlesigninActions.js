export const googleSignInResponseAction = (payload) => ({
  type: "GOOGLE-RESPONSE",
  info: payload,
});

export const googleSignInApiResponse = (payload) => ({
  type: "GOOGLE_SIGNIN_API_RESPONSE",
  data: payload,
});
