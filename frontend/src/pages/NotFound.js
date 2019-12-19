import React from 'react';

// importing the default components.
import {Row, Container, Col} from "react-bootstrap";

// importing the header and footers.
import Header from "../layout/Header";
import Footer from "../layout/Footer";

/**
 * @stateless
 * @param props
 * @returns {*}
 */
export default props => (
    <Container fluid>
        <Header  {...props} />
        <Row>
            <Col>
                <span className={"text-center"}>
                    Page not found
                </span>
            </Col>
        </Row>
        <Footer {...props}/>
    </Container>
);
