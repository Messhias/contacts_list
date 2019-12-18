import React from 'react';

// pages import
import Pages from '../pages';

// react router import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// get token function.
import {getToken} from "./Functions";

/**
 * The routes, here we set up our routes, if the users isn't logged in in the
 * system the user it'll redirect to login again.
 *
 * @return {*[]}
 */
function makeRoutes() {
    const paths = {
        "/": getToken() ? Pages.Dashboard : Pages.Login,
        "/home": getToken() ? Pages.Dashboard : Pages.Login,
        "/dashboard": getToken() ? Pages.Dashboard : Pages.Login,

        "/cities": getToken() ? Pages.Cities.All : Pages.Login,
        "/city/add": getToken() ? Pages.Cities.Add : Pages.Login,
        "/city/edit/:id": getToken() ? Pages.Cities.Edit : Pages.Login,

        "/operational-zones": getToken() ? Pages.OperationalZones.OperationalZonesList : Pages.Login,
        "/operational-zones/add": getToken() ? Pages.OperationalZones.Add : Pages.Login,
        "/operational-zones/edit/:id": getToken() ? Pages.OperationalZones.Edit : Pages.Login,
        "/operational-zones/long-haul": getToken() ? Pages.OperationalZones.LongHaul.List : Pages.Login,
        "/operational-zones/long-haul/price/:id": getToken() ? Pages.OperationalZones.LongHaul.EditPrices : Pages.Login,

        "/vehicles/types/": getToken() ? Pages.VehiclesSettings.Types.All : Pages.Login,
        "/vehicles/types/add": getToken() ? Pages.VehiclesSettings.Types.Add : Pages.Login,
        "/vehicles/types/edit/:id": getToken() ? Pages.VehiclesSettings.Types.Edit : Pages.Login,

        "/vehicles/brands/": getToken() ? Pages.VehiclesSettings.Brands.All : Pages.Login,
        "/vehicles/brands/add": getToken() ? Pages.VehiclesSettings.Brands.Add : Pages.Login,
        "/vehicles/brand/edit/:id": getToken() ? Pages.VehiclesSettings.Brands.Edit : Pages.Login,

        "/verifications/customers": getToken() ? Pages.Verifications.Customers : Pages.Login,
        "/verifications/drivers": getToken() ? Pages.Verifications.Drivers : Pages.Login,

        "/accounting-settings/taxes": getToken() ? Pages.AccountingSettings.Taxes.List : Pages.Login,
        "/accounting-settings/tax/add": getToken() ? Pages.AccountingSettings.Taxes.Add : Pages.Login,
        "/accounting-settings/taxes/edit/:id": getToken() ? Pages.AccountingSettings.Taxes.Edit : Pages.Login,

        "/configurations/goods-types": getToken() ? Pages.AppConfigurations.GoodsTypes.All : Pages.Login,
        "/configurations/goods-types/add": getToken() ? Pages.AppConfigurations.GoodsTypes.Add : Pages.Login,
        "/configurations/goods-types/edit/:id": getToken() ? Pages.AppConfigurations.GoodsTypes.Edit : Pages.Login,

        "/bookings/estimations": getToken() ? Pages.Bookings.Estimations : Pages.Login,

        "/logout": Pages.Logout,
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

export default class Routes extends React.Component {

    /**
     * Default router make component.
     *
     * @return {*}
     */
    static renderRoutes() {
        return (
            <Router
                ref="route"
            >
                <Switch>
                    {makeRoutes()}
                    <Route component={Pages.NotFound} />
                </Switch>
            </Router>
        );
    }

    /**
     * Default render function.
     *
     * @returns {*}
     */
    render() {
        return Routes.renderRoutes();
    }
}
