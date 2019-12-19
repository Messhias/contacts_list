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
    if (props) {
        console.log(props);
        if (props.history && props.history.path !== "/") {
            return (
                <Row>
                    <Col onClick={() => props.history.goBack()}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />{" "} Back
                    </Col>
                    <Col>
                        <span className={"text-center"}>
                            Contacts list
                        </span>
                    </Col>
                    <Col>
                        <span className={"pull-right"}>
                            <Link to={"/contacts/add"}>
                                <FontAwesomeIcon icon={faPlus} /> {" "} Add to favorites
                            </Link>
                        </span>
                    </Col>
                </Row>
            );
        }
    }


    return (
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
    );
}

/**
 * @stateless
 * @param props
 * @returns {*}
 */
export default props => mountHeaders(props);
