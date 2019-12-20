import React from "react";
import {generic_on_change, on_submit, render_default_form_buttons} from "../../utils/Functions";
import { Form, FormGroup, FormLabel} from "react-bootstrap";
import AbstractComponentClass from "../../utils/AbstractComponentClass";

export default class GenericContactsForm extends AbstractComponentClass<this> {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            description: "",
            id: false,
        };
    }

    componentDidMount(): void {
        this.fillState();
    }

    fillState() {
        this.setState({ ...this.props.props.history.location.state});
    }

    render() {
        const {
            name = "",
            phone = "",
            description = "",
            id = false,
        } = this.state,
        {
            edit_mode = false,
        } = this.props;

        return (
            <Form
                onSubmit={event => on_submit(
                    event,
                    {
                        name,
                        phone,
                        description,
                    },
                    this,
                    id,
                    edit_mode)}
            >
                <FormGroup>
                    <FormLabel htmlFor={"name"}>
                        Name
                    </FormLabel>
                    <input
                        name={"name"}
                        id={"name"}
                        className={"form-control"}
                        value={name}
                        onChange={event => generic_on_change(event, this)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor={"phone"}>
                        Phone
                    </FormLabel>
                    <input
                        name={"phone"}
                        id={"phone"}
                        className={"form-control"}
                        value={phone}
                        onChange={event => generic_on_change(event, this)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor={"description"}>
                        Description
                    </FormLabel>
                    <textarea
                        name={"description"}
                        id={"description"}
                        className={"form-control"}
                        rows={4}
                        value={description}
                        onChange={event => generic_on_change(event, this)}
                    />
                </FormGroup>
                {render_default_form_buttons(edit_mode, "Edit contact", "Add contact")}
            </Form>
        );
    }
}
