import React from "react";

// importing default components.
import { Accordion, Card, Button } from "react-bootstrap";
import BaseLayout from '../../layout';

// default class holder.
import AbstractComponentClass from "../../utils/AbstractComponentClass";

export default class AllContacts extends AbstractComponentClass<this> {

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
