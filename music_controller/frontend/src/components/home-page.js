import React, { Component } from 'react';
import RoomJoinPage from './room-join-page';
import CreateRoomPage from './create-room-page';
import Room from './room';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return( 
            <Router>
                <Switch>
                    <Route exact path="/">This is the home page</Route>
                    <Route path="/join" component={RoomJoinPage} />
                    <Route path="/create" component={CreateRoomPage} />
                    <Route path="/room/:roomCode" component={Room} />
                </Switch>
            </Router>
        );
    }
}