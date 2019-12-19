import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import AllCustomersContainer from '../containers/AllCustomersContainer';
import OneCustomerContainer from '../containers/OneCustomerContainer';
import CreateContainer from '../containers/CreateContainer';
import UpdateContainer from '../containers/UpdateContainer';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/index' component={AllCustomersContainer} />
            <Route path='/detail' component={OneCustomerContainer} />
            <Route path='/create' component={CreateContainer} />
            <Route path='/update' component={UpdateContainer} />  
        </Switch>
    </div>
);