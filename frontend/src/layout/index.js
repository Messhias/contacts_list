import React from 'react';

// importing the default components.
import { Container } from 'react-bootstrap';

// imports of header and footer.
import Footer from "./Footer";
import Header from "./Header";

/**
 * Default layout component.
 *
 * @stateless
 * @param props
 * @returns {*}
 */
export default props => (
    <Container fluid>
        <Header  {...props} />
        {props.children}
        <Footer />
    </Container>
);
