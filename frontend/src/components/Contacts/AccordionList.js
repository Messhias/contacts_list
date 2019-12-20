import React from "react";

// importing the default components.
import {Accordion, Button, Card, Spinner, Row, Col} from "react-bootstrap";

// importing the react router
import { Link } from 'react-router-dom';

// importing the default redux functions
import { connect } from "react-redux";
import { delete_contact } from "../../actions/contacts";

// font awesome icon
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons";

class AccordionList extends React.PureComponent {

    /**
     * Default render contact list function.
     *
     * @static
     * @param component
     * @returns {*}
     */
    static renderList(component = false) {
        if (component) {
            if (component.props.data && component.props.data.length > 0) {
                return component.props.data.map((data, index) =>
                    <Card
                        key={index}
                    >
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                {data.name}
                            </Accordion.Toggle>
                            <Button
                                type={"button"}
                                className={'pull-right btn btn-danger'}
                                onClick={() => {
                                    component.props.delete_contact(data.id);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Delete <FontAwesomeIcon icon={faTrash} />
                            </Button>
                            {"  "}
                            <Button
                                type={"button"}
                                className={'pull-right btn btn-warning'}
                                onClick={() => component.props.history.push(`/contacts/edit/${data.id}`, data)}
                            >
                                Edit <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index}>
                            <Card.Body>
                                {data.description} <br />
                                <a href={`tel:${data.phone}`}>
                                    {data.phone}
                                </a>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                );
            } else if (component.props.data) {
                if (component.props.data.length === 0) {
                    return (
                        <Row>
                            <Col>
                                No contacts found, go to <Link to={"/contacts/add"}> add favourites </Link>
                                to add a new one.
                            </Col>
                        </Row>
                    );
                }
            }
        }

        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    render() {
        return AccordionList.renderList(this);
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
 * @returns {{get_contacts: (function(): *), delete_contact: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => ({
    delete_contact: (id = false) => dispatch(delete_contact(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AccordionList);
