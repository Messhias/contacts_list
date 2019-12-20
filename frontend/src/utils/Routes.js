import React from 'react';

// pages import
import Pages from '../pages';

// react router import
import {
    Route,
    withRouter,
} from "react-router-dom";

// importing the animations transitions.
import { AnimatedSwitch } from "./AnimatedSwitch";

/**
 * The routes, here we set up our routes, if the users isn't logged in in the
 * system the user it'll redirect to login again.
 *
 * @return {*[]}
 */
function makeRoutes() {
    const paths = {
        "/": Pages.Contacts.All,
        "/contacts/add": Pages.Contacts.Add,
        "/contacts/edit/:id": Pages.Contacts.Edit,
    };

    return Object.keys(paths).map(path => {
        return (
            <Route
                exact
                key={path}
                path={path}
                component={paths[path]}
            />
        );
    });
}

const Routes = withRouter(({ location }) => {
    return (
        <AnimatedSwitch location={location}>
            {makeRoutes()}
            <Route component={Pages.NotFound} />
        </AnimatedSwitch>
    );
});

export default Routes;

