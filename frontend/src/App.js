import React from 'react';
import './scss/main.scss';

import Routes from './utils/Routes';
import {BrowserRouter as Router} from "react-router-dom";

export default class App extends React.Component {
    /**
     * @return {*}
     */
    render() {
        return (
            <Router
                ref="route"
            >
                <Routes />
            </Router>
        );
    }
}
