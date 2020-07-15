import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from "./Pages/Login";
import New from "./Pages/New";
import Dashboard from "./Pages/Dashboard";

export default function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/new" component={New}/>
        </Switch>
    </BrowserRouter>
    )
}