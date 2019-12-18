import Contacts from '../../services/contacts';
import {CREATE_CONTACTS, DELETE_CONTACTS, FIND_CONTACTS, GET_CONTACTS, UPDATE_CONTACTS} from "./types";

/**
 * Return all the contacts.
 *
 * @returns {function(...[*]=)}
 */
export const get_contacts = () => dispatch => {
    new Contacts()
        .get()
        .then(response => {
            dispatch({
                type: GET_CONTACTS,
                ...response.data
            });
        })
        .catch(error => console.error(error));
};

/**
 * Find a specific contact.
 *
 * @param id
 * @returns {function(...[*]=)}
 */
export const find_contact = (id = false) => dispatch => {
    if (id) {
        new Contacts()
            .find(id)
            .then(response => dispatch({
                type: FIND_CONTACTS,
                ...response.data
            }))
            .catch(error => console.error(error));
    }
};

/**
 * Update the contact entry.
 *
 * @param id
 * @param contacts
 * @returns {function(...[*]=)}
 */
export const update_contact = (id = false, contacts = false) => dispatch => {
    if (id && contacts) {
        new Contacts()
            .update(id, contacts)
            .then(response => dispatch({
                type: UPDATE_CONTACTS,
                ...response.data,
            }))
            .catch(error => console.error(error));
    }
};

/**
 * Create new contact.
 *
 * @param contacts
 * @returns {function(...[*]=)}
 */
export const create = (contacts = false) => dispatch => {
    if (contacts) {
        new Contacts()
            .create(contacts)
            .then(response => dispatch({
                type: CREATE_CONTACTS,
                ...response.data,
            }))
            .catch(error => console.error(error));
    }
};

/**
 * Delete contact.
 *
 * @param id
 * @returns {function(...[*]=)}
 */
export const delete_contact = (id = false) => dispatch => {
    if (id) {
        new Contacts()
            .delete(id)
            .then(response => dispatch({
                type: DELETE_CONTACTS,
                deleted: response.data,
            }))
            .catch(error => console.error(error));
    }
};
