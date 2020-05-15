import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import  TestRenderer from "react-test-renderer";
import {shallow} from "enzyme"

function ProblemChild() {
    throw new Error('Error thrown from problem child');
    return <div>Error</div>; // eslint-disable-line
  }

describe("Error Boundary Test", ()=>{
    let ErrorBoundaryComponent
    beforeAll(() => {
        ErrorBoundaryComponent = shallow(<ErrorBoundary><h1>wassup</h1></ErrorBoundary>)
      })
      it('should render the child component', () => {
        expect(ErrorBoundaryComponent.find('h1').exists()).toBeTruthy()
      })
})

describe('When a JS error is caught in a child component', () => {
    let ErrorBoundaryComponent
    beforeAll(() => {
      jest.spyOn(global.console, 'log')
      ErrorBoundaryComponent = shallow(<ErrorBoundary><ProblemChild/></ErrorBoundary>)
      ErrorBoundaryComponent.instance().componentDidCatch('oh nooos an error')
      ErrorBoundaryComponent.update()
    })
  
    it('should log an error to console', () => {
        expect(global.console.log).toHaveBeenCalledWith('oh nooos an error')
      })
  
    it('should update the state to indicate an error', () => {
        console.log(ErrorBoundaryComponent.instance().state)
      expect(ErrorBoundaryComponent.instance().state.hasError).toBeTruthy()
    })
  
    it('should not render the child component', () => {
      expect(ErrorBoundaryComponent.find('ProblemChild').exists()).toBeFalsy()
    })
  })