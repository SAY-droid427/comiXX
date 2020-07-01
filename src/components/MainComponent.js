import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./HomeComponent";
import Gallery from "./GalleryComponent";


class Main extends Component{
    render(){
        return (
            <div>                
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Redirect exact path="/home" />
               </Switch>

            </div>
           

        )
    }
}
export default Main;