import React from "react";
import AbstractComponentClass from "../../utils/AbstractComponentClass";

// importing default components.
import BaseLayout from "../../layout";
import ApplicationComponents from '../../components';
import { Row, Col  } from 'react-bootstrap';


// importing the default redux functions
import { connect } from "react-redux";
import { update_contact } from "../../actions/contacts";

class Add extends AbstractComponentClass<this> {
    render() {
        return (
            <BaseLayout {...this}>
                <Row
                    className={"accordion-container"}
                >
                    <Col>
                        <ApplicationComponents.Contacts.GenericContactsForm
                            {...this}
                            edit={this.props.edit}
                            edit_mode
                        />
                    </Col>
                </Row>
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
 * @returns {{get_contacts: (function(): *)}}
 */
const mapDispatchToProps = dispatch => ({
    edit: (id = false, contacts = {}) => dispatch(update_contact(id, contacts)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Add);
