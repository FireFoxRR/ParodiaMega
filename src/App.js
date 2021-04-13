import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home.component'
import Login from './components/login.component'
import AddTutorial from './components/add-tutorial.component'
import TutorialsList from './components/tutorials-list.component'


const App = () => (
        <Router>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/tutorials">
                    <TutorialsList />
                </Route>
                <Route exact path="/add">
                    <AddTutorial />
                </Route>
            </Switch>
        </Router>
);

export default App;
