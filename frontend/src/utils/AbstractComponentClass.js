import React from 'react';
import {spread_state} from "./Functions";

// react bootstrap pagination factory;
import paginationFactory from "react-bootstrap-table2-paginator";

export default class AbstractComponentClass extends React.Component {
    _pagination = undefined;

    /**
     * Default abstract class constructor.
     *
     * The state it'll be empty since this is a abstraction level of a React.Component class
     *
     * Call the @function componentSpread generic to avoid reuse.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            redirect_page: "",
        }

        this.pagination = paginationFactory();
    };

    /**
     * Set the pagination for react boostrap table
     *
     * @param pagination
     */
    set pagination(pagination ) {
        if (pagination) {
            this._pagination = pagination;
        }
    }

    /**
     * Get the pagination for react boostrap table
     *
     * @return mixed
     */
    get pagination() {
        return this._pagination;
    }

    /**
     * @param prevProps
     * @param prevState
     * @returns {null|boolean}
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            const {
                    response_status = 0,
                    edited = false,
                } = this.props,
                {
                    redirect_page = "",
                } = this.state;


            if (response_status === 201 ) {
                this.props.history.push(redirect_page);
            }

            if (edited) {
                if (this.props.history.location.pathname === redirect_page) {
                    this.componentSpread(this.props);
                } else {
                    this.props.history.push(redirect_page);
                }
            }

            this.setState({ ...this.props });
        }
        return null;
    }

    /**
     * Receive the data from parent component.
     *
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({ ...this.props });
        }
    }

    /**
     * Callback shell for generic function.
     *
     * @info
     *  it's arrow function to avoid the binding in the
     *  child components which will inheritance from this class.
     *
     * @param state
     */
    componentSpread = (state = false) => {
        if (state) {
            spread_state(this, state);
        }
    }
};
