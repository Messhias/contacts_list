import {CREATE_CONTACTS, DELETE_CONTACTS, GET_CONTACTS, UPDATE_CONTACTS} from "../../actions/contacts/types";
import {resolve_redux_state} from "../../utils/Functions";

const initial_state = {
    edited: false,
    code: 0,
};

export default (state = initial_state, action = false) => {
    if (action) {
        const { type = false } = action;

        if (type) {
            switch (type) {

                case GET_CONTACTS:
                    return resolve_redux_state(state, action);

                case DELETE_CONTACTS:
                    return resolve_redux_state(state, action);

                case CREATE_CONTACTS:
                    return resolve_redux_state(state, action);

                case UPDATE_CONTACTS:
                    return resolve_redux_state(state, action);

                default:
                    return { ...state };
            }
        }
    }
    return state;
}
