import React from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

/**
 * @param progress
 */
export function storeLoadingProgress(progress = 0) {
    localStorage.setItem('progress', JSON.stringify(progress));
}

/**
 * @return {any | number}
 */
export function getLoadingProgress() {
    return JSON.parse(localStorage.getItem("progress")) || 0;
}


/**
 * Custom function to treat requests to get the current
 * request timeout and make custom loadings.
 *
 * @param data
 * @return {{data: Array, onDownloadProgress: onDownloadProgress}}
 */
export function treatRequest(data = []) {
    storeLoadingProgress(0);
    return {
        ...data,
        onDownloadProgress: (progressEvent) => {
            let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            storeLoadingProgress(percentCompleted);
        }
    }
}

/**
 * Store the user in local storage browser data.
 *
 * @param data
 */
export function storageUser(data = []) {
    localStorage.setItem("logged", JSON.stringify(data));
}

/**
 * Function to return the stored user in local storage.
 *
 * @returns {any | Array}
 */
export function getStoredUser() {
    return JSON.parse(localStorage.getItem("logged")) || false;
}

/**
 * @returns {token}
 */
export function getToken() {
    return getStoredUser().web_token;
}

/**
 * Remove the logged user from storage.
 */
export function eraseStorageUser() {
    localStorage.removeItem("logged");
}

/**
 * Treat the generic errors with redux.
 *
 * @param error
 * @param dispatch_object
 * @param object
 */
export function generic_error_throw(error, dispatch_object, object) {
    console.error(error);
    dispatch_object({
        ...object,
    });
}

/**
 * Make the state of a component change by input
 * dynamically.
 *
 * @param event
 * @param component
 */
export function generic_on_change(event, component) {
    if (event) {
        if (component) {
            let value = event.target.value;

            if (event.target.type === "checkbox") {
                if (value === "on") value = true;
                else if (value === "off") value = false;
            }

            component.setState({
                ...component.state,
                [event.target.name]: value,
            });
        }
    }
}



/**
 * Function to spread the state trough the components.
 *
 * Works simple, if the component is passed, and the state is passed also
 * it'll gonna spread trough this component.
 *
 * @param component
 * @param state
 */
export function spread_state(component = false, state = false) {
    if (component) {
        if (state) {
            component.setState({
                ...state
            });
        }
    }
}


/**
 * Generic function to change the state of the
 * checkboxes in the application without
 * have the necessity to write on all components the
 * same function.
 *
 * @param event
 * @param component
 */
export const generic_check_box_change = (event, component) =>
    component.setState({ [event.target.name]: event.target.checked });


/**
 * Generic function to change the state
 * of the type of <select> as multi.
 *
 * This function first it'll check if there's options to foreach to avoid
 * push undefined values.
 * After the check the undefined values it'll check if the specific option
 * it's selected and push into variable of values and if the values
 * isn't empty it'll push into the component state variable.
 *
 * @param event
 * @param component
 */
export function generic_multi_select_change(event, component) {
    if (event.target.options.length > 0) {
        const values = [];

        for (let i = 0; i < event.target.options.length; i++)
            if (event.target.options[i].selected) values.push(event.target.options[i].value);

        if (values.length > 0) component.setState({ [event.target.name]: values });
    }
}

/**
 * Generic function to set up the file changes on component
 * state.
 *
 * This function it'll check if the given input there's files on the array
 * and if there's it'll set up inside the component state.
 *
 * @param event
 * @param component
 */
export function generic_file_change(event, component) {
    if (event.target.files.length > 0) {
        const temp_name = `${event.target.name}_temp`;

        component.setState({
            [event.target.name]: URL.createObjectURL(
                event.target.files[0]
            )
        });
        let reader = new FileReader();
        reader.onload = (e) => {
            component.setState({
                [`${temp_name}`]: e.target.result
            })
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}


/**
 * Default event to call the form addition of a new
 * information in the system
 *
 * @info
 *  This is for default operations like add and edit, customs operations
 *  you need to build your form component by yourself.
 *
 * @param event
 * @param data
 * @param component
 * @param id
 * @param edit_mode
 */
export function on_submit(
    event = false,
    data = false,
    component = false,
    id = false,
    edit_mode = false,
) {
    if (event) {
        event.preventDefault();
    } else {
        return false;
    }

    if (!id && !edit_mode) {
        if (data && component) {
            component.setState({ loading: true });

            if (typeof component.props.add === "function") {
                component.props.add(data);
            }

        }
    } else if (typeof component.props.edit === "function") {
        component.props.edit(id, data);
    }
}


/**
 * Render the custom buttons.
 *
 * @info
 * This is for default add and edit operations,
 * if you need to do a custom operation you need to
 * build the component by yourself.
 *
 * @param edit_mode
 * @param edit_title
 * @param add_title
 * @returns {*}
 */
export function render_default_form_buttons(
    edit_mode = false,
    edit_title = "",
    add_title = ""
) {
    if (edit_mode) {
        return (
            <Button
                type={'submit'}
                className={'btn btn-sm btn-success'}
            >
                <FontAwesomeIcon icon={faEdit} /> {" "}
                { edit_title }
            </Button>
        )
    }

    return (
        <Button
            type={'submit'}
            className={'btn btn-sm btn-success'}
        >
            <FontAwesomeIcon icon={faPlusCircle} /> {" "}
            { add_title }
        </Button>
    );
}

/**
 * Default redux abstract generic resolver.
 *
 * @param state
 * @param action
 * @returns {{}}
 */
export function resolve_redux_state(state = null, action = null) {
    if (action && state) {
        delete action.type;

        return {
            ...state,
            ...action,
        };
    }

    return {...state};
}
