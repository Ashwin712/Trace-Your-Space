const initialState = {
    empId: "",
    firstName: "FIRST NAME",
    lastName: "LAST NAME",
    emailId: "first.last@gmail.com",
    phoneNo: null,
    paswd: null,
    profileImageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    requestForAccountManager: null,
    users: [],
  };
  export const accountReducer = (state, action) => {
    if (typeof state === "undefined") {
      return initialState;
    }
    // if (action.type === "ACCOUNT_DETAILS") return { ...state, ...action.data };
    // if (action.type === "USERS") return { ...state, users: action.data };
    // if (action.type === "REQUEST_ACCOUNT_MANAGER") return { ...state, requestForAccountManager: action.data };
    // return state;
    switch (action.type) {
      case "ACCOUNT_DETAILS":
        return { ...state, ...action.data };
      case "USERS":
        return { ...state, users: action.data };
      case "REQUEST_ACCOUNT_MANAGER":
        return { ...state, requestForAccountManager: action.data };
      default:
        return state;
    }
  };
  
  export const getAccount = (state) => {
    return state.account;
  };
  export const getUserList = (state) => {
    return state.account.users;
  };