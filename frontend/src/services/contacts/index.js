import Requests from '../../request/index'
import AbstractRequests from "../AbstractRequests";

export default class Verifications extends AbstractRequests{
    /**
     * Create the requests object inside the class context.
     *
     * @type {null}
     * @private
     */
    _requests = null;

    constructor() {
        super(Requests.Contacts);
        if (!Requests) {
            throw new Error("No requests provided to Verifications services provider");
        }

        this._setRequests(Requests.Contacts);
    }

    /**
     * Set the requests methods inside the application context.
     *
     * @param requests
     * @private
     */
    _setRequests(requests) {
        this._requests = requests;
    }

    /**
     * Retrieve all the requests object
     *
     * @returns {null}
     */
    getRequests() {
        return this._requests;
    }
}
