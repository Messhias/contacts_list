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

// export default class Routes extends React.Component {
//
//     /**
//      * Default router make component.
//      *
//      * @return {*}
//      */
//     static renderRoutes() {
//         return (
//             <Router
//                 ref="route"
//             >
//                 <Switch>
//                     {makeRoutes()}
//                     <Route component={Pages.NotFound} />
//                 </Switch>
//             </Router>
//         );
//     }
//
//     /**
//      * Default render function.
//      *
//      * @returns {*}
//      */
//     render() {
//         return Routes.renderRoutes();
//     }
// }

const Routes = withRouter(({ location }) => {
    return (
        <AnimatedSwitch location={location}>
            {makeRoutes()}
            <Route component={Pages.NotFound} />
        </AnimatedSwitch>
    );
});

export default Routes;

