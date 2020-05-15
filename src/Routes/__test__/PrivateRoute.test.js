import { shallow } from "enzyme";
import React from "react";
import * as StorageModule from "../../../shared/storage/Storage";
import PrivateRoute from "../PrivateRoute";

describe("<PrivateRoute/>", () => {
  // it('passes props to Route component', () => {
  //     const { wrapper } = setup({ path: '/scarif' });
  //     expect(wrapper.find(Route).prop('path')).toBe('/scarif');
  // });

  // it('redirects unauthenticated users to login', () => {
  //     const { wrapper } = setup();
  //     const ComponentToRender = wrapper.prop('render');
  //     const redirectWrapper = shallow(<ComponentToRender location="/scarif" />);
  //     expect(redirectWrapper.find(Redirect).props()).toEqual({
  //         push: false,
  //         to: {
  //             pathname: '/login',
  //             state: { from: '/scarif' }
  //         }
  //     });
  // });

  it("displays passed component to authenticated users", () => {
    const { wrapper, props } = setup({ isAuthenticated: true });
    jest.spyOn(StorageModule, "isSignedIn").mockResolvedValue(false);
    const ComponentToRender = wrapper.prop("render");
    const componentWrapper = shallow(<ComponentToRender location="/scarif" />);
    expect(componentWrapper.is(props.component)).toBe(true);
    expect(componentWrapper.props()).toEqual({
      location: "/scarif",
    });
    jest.spyOn(StorageModule, "isSignedIn").mockResolvedValue(true);
    const componentWrapper1 = shallow(<ComponentToRender location="/scarif" />);
    expect(componentWrapper1.is(props.component)).toBe(true);
  });
});

function setup(customProps) {
  const props = {
    component: () => <h1>Hyperspace tracker</h1>,
    isAuthenticated: false,
    ...customProps,
  };

  const wrapper = shallow(<PrivateRoute {...props} />);

  return {
    wrapper,
    props,
  };
}
