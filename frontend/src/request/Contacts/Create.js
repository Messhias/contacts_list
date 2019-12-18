import Request from '../../utils/Request';
import {treatRequest} from "../../utils/Functions";

/**
 * Requesting to add taxes on system.
 *
 * @request
 * @param contacts
 * @returns {Promise<AxiosResponse<T>>}
 */
export default (contacts = {}) => Request.post(`/contacts`, treatRequest({ contacts }));
