import React, {Component} from "react";
import {ButtonGroup,Button} from "reactstrap";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/HeaderComponents";
import Main from "./components/MainComponent"

class App extends Component{
constructor(props){
    super(props);
    this.state={
        bgColor:"rgb(23,54,65)",
        textColor:"rgb(176,156,43)"
    }

  }

  render(){
      return(
          <div>
              <BrowserRouter>
              <Header />           
              <Main />
              </BrowserRouter>
          </div>
      )
  }
}
export default App;