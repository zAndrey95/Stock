import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Welcome} from "./components/Welcome";
import {Stock} from "./components/stock/Stock";
import {Location} from "./components/stock/Location";

export const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={Welcome}/>
            <Route path={'/stock/location/'} component={Location} />
            <Route path={'/stock/'} component={Stock} />
        </Switch>
    );
};
