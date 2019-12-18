import {confirmAlert} from "react-confirm-alert";

/**
 * Default handler for generic error functions.
 *
 * @param error
 * @param state
 * @param stateFieldsToSetFalse
 */
export function genericError(error = [], state = {}, stateFieldsToSetFalse = []) {

    if (stateFieldsToSetFalse.length > 0) stateFieldsToSetFalse.map(field => state[field] = false);

    console.error(error);
    state.setState({ state });
    confirmAlert({
        title:  `Warning`,
        message: `Sorry, at moment we're under repairs, try again later.`,
        buttons: [
            {
                label: 'Ok, thank you',
            },
        ]
    });
}
