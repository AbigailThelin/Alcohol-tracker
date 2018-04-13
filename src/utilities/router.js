import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Alcohol from '../components/Alcohol';
import Lagoon from '../components/Lagoon';

export default (
    <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={Alcohol} path='/alcoholTracker'/>
        <Route component={Lagoon} path='/lagoonCounter'/>
    </Switch>
)