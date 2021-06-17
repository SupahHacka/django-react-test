import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./home-page";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <HomePage />
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App name="inno"/>, appDiv);