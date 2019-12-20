import React from "react";

// importing the default components.
import {Col, Row} from "react-bootstrap";

// importing font awesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft, faPlus} from "@fortawesome/free-solid-svg-icons";

// importing the react dom router functions
import { Link } from 'react-router-dom';

/**
 * Mounting the headers accordingly with page.
 *
 * @param props
 * @returns {*}
 */
function mountHeaders(props = false) {
    if (props.props) {
        if (props.props.history && props.props.location.pathname !== "/") {
            return (
                <div
                    className={"container-header"}
                >
                    <Row>
                        <Col>
                            <span onClick={props.props.history.goBack}>
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} />{"  "} Back
                            </span>
                        </Col>
                        <Col>
                            <span className={"text-center"}>
                                <Link to={"/"}>
                                    Contacts list
                                </Link>
                            </span>
                        </Col>
                        <Col>
                            <span className={"pull-right"}>
                                <Link to={"/contacts/add"}>
                                    <FontAwesomeIcon icon={faPlus} /> {"  "} Add to favorites
                                </Link>
                            </span>
                        </Col>
                    </Row>
                </div>
            );
        }
    }


    return (
        <div
            className={"container-header"}
        >
            <Row>
                <Col>
                <span className={"text-center"}>
                    <Link
                        to={"/"}
                    >
                        Contacts list
                    </Link>
                </span>
                </Col>
            </Row>
        </div>
    );
}

/**
 * @stateless
 * @param props
 * @returns {*}
 */
export default props => mountHeaders(props);
