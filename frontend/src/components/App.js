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

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Router>
            <Switch>
                <Route path="/">
                    <p>This is the home page o</p>
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