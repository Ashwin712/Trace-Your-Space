import { onSignIn, getToken, isSignedIn, onSignOut } from "../Storage";
const spy_setItem = jest.spyOn(Storage.prototype, "setItem");

const spy_getItem = jest.spyOn(Storage.prototype, "getItem");

const spy_removeItem = jest.spyOn(Storage.prototype, "removeItem");

describe("Test for storage functions", () => {
  it("Test for onSignIn function", () => {
    onSignIn("Token");
    expect(spy_setItem).toBeCalledWith("@MyApp_key", "Token");
  });
  it("Test for get Token function", () => {
    getToken("/homepage");
    expect(spy_getItem).toBeCalledWith("@MyApp_key");
  });
  it("Test for isSignedIn", () => {
    isSignedIn();
    expect(spy_getItem).toBeCalledWith("@MyApp_key");
  });
  it("Test for onSIgnOut", () => {
    onSignOut();
    expect(spy_removeItem).toBeCalledWith("@MyApp_key");
  });
});
