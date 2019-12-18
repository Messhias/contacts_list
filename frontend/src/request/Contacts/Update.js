import Request from '../../utils/Request';
import {treatRequest} from "../../utils/Functions";

/**
 * Send the update
 *
 * @param id
 * @param contacts
 * @returns {Promise<AxiosResponse<T>>}
 */
export default (id = false, contacts = false) =>
    Request.put(`taxes/${id}`, treatRequest({ contacts }));
