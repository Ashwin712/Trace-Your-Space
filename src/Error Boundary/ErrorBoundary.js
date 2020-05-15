import React from 'react';
import history from "../Routes/history"


export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError:false };
    }
    // static getDerivedStateFromError(error){
    //     return {hasError:true};
    // }
    componentDidCatch(error, info) { 
      // if(error instanceof Promise) {
      //   console.log(error);
      //   window.location.href = "http://localhost:3000/Error"
      // }
      console.log(error)
         this.setState({
           hasError: true,
         })
    }
   
    render() {
      let location ={
        status: 500
      }
      if (this.state.hasError) {
        // history.push({ pathname: "/ErrorPage", status: 500 });
        return null
      }
      console.log("hello")
      return this.props.children;
    } 
  }