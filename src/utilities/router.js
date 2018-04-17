import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import AvailableTrackers from '../components/AvailableTrackers';
import CreateTracker from '../components/CreateTracker';
import Alcohol from '../components/Alcohol';
import Lagoon from '../components/Lagoon';

export default (
    <Switch>
        <Route component={AvailableTrackers} path='/' exact />
        <Route component={CreateTracker} path='/createTracker'/>
        <Route component={Alcohol} path='/alcoholTracker'/>
        <Route component={Lagoon} path='/lagoonCounter'/>
    </Switch>
)