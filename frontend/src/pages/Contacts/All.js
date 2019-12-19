import React from "react";

// importing default components.
import { Accordion, Card, Button } from "react-bootstrap";
import BaseLayout from '../../layout';

// importing the default
import { connect } from "react-redux";

// default class holder.
import AbstractComponentClass from "../../utils/AbstractComponentClass";
import {get_contacts} from "../../actions/contacts";

class AllContacts extends AbstractComponentClass<this> {
    constructor(props) {
        super(props);

        this.props.get_contacts();
    }

    render() {
        return (
            <BaseLayout {...this}>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
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
