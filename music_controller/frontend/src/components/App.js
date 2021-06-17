import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./home-page";
import RoomJoinPage from "./room-join-page";
import CreateRoomPage from "./create-room-page";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <HomePage />
            <RoomJoinPage />
            <CreateRoomPage />
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App name="inno"/>, appDiv);