const initialState = {
  data: {
    status: 200,
    data: {
      superAdmin: false,
      admin: false,
      firstName: "FIRST NAME",
      lastName: "LAST NAME",
    },
  },
  googleData: {
    profileObj: {
      email: "abc@gmail.com",
      name: "Name",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
};

export const googlesigninReducer = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case "GOOGLE-RESPONSE":
      return { ...state, googleData: action.info };
    case "GOOGLE_SIGNIN_API_RESPONSE":
      return { ...state, data: action.data };
    default:
      return state;
  }
};
