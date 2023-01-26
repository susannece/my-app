//Using React Router for a Single Page Application https://www.taniarascia.com/using-react-router-spa/

import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";   

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

export default function RouterExample() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/:id" component={UserPage}/>
            </Switch>
        </BrowserRouter>
    )
}