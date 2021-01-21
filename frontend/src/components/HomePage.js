import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage"
import CreateRoomPage from "./CreateRoomPage"
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect
} from "react-router-dom"

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Router>
            <Switch>
                <Route path="/">
                    
                </Route>
                <Route path="/join" Component={RoomJoinPage} />
                <Route path="/create" Component={CreateRoomPage} />
                </Switch>
        </Router>
        );
    }
}
const appDiv = document.getElementById("app")
render(<App name="Prince Darlington"/>, appDiv)