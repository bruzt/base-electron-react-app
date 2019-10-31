import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import Main from '../components/content/Main';

export default (props) => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Main} />

                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    );
}