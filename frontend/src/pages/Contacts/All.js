import React from "react";

// importing default components.
import { Accordion } from "react-bootstrap";
import BaseLayout from '../../layout';
import ContactsComponent from '../../components';


// default class holder.
import AbstractComponentClass from "../../utils/AbstractComponentClass";

// importing the default redux functions
import { connect } from "react-redux";
import {get_contacts} from "../../actions/contacts";

class AllContacts extends AbstractComponentClass<this> {

    componentDidMount(): void {
        this.props.get_contacts();
    }

    render() {
        return (
            <BaseLayout {...this}>
                <Accordion
                    className={"accordion-container"}
                >
                    <ContactsComponent.Contacts.List {...this.state} />
                </Accordion>
            </BaseLayout>
        )
    }
}

/**
 * Mapping the state to props.
 *
 * @param state
 * @returns ReduxObject
 */
const mapStateToProps = state  => {
    const {
        Contacts = []
    } = state;

    return {
        ...Contacts,
    };
};

/**
 * Mapping the functions to props.
 *
 * @param dispatch
 * @returns {{get_cities: (function(): *), delete_city: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => ({
    get_contacts: () => dispatch(get_contacts())
});

export default connect(mapStateToProps,mapDispatchToProps)(AllContacts);
