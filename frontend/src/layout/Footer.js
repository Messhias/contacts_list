import React from "react";

// importing the default components.
import {Col, Row} from "react-bootstrap";

// importing react router dom functions.
import { Link } from 'react-router-dom';

// importing font awesome icons.
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

/**
 * @stateless
 * @returns {*}
 */
export default () =>
    <Row>
        <Col>
            <span className={"text-center"}>
                <Link to={"/"}>
                    <FontAwesomeIcon icon={faUser} />
                    Contacts
                </Link>
            </span>
        </Col>
        <Col>
            <span className={"text-center"}>
                <Link to={"contacts/add"}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add to favourites
                </Link>
            </span>
        </Col>
    </Row>
