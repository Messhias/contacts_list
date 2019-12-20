import Request from '../../utils/Request';

/**
 * Send delete request to the server.
 *
 * @request
 * @param id
 * @returns {Promise<AxiosResponse<T>>}
 */
export default (id = false) => Request.delete(`/contacts/${id}`);
