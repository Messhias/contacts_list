import Request from '../../utils/Request';

/**
 * Request the tax detail.
 *
 * @request
 * @param id
 * @returns {Promise<AxiosResponse<T>>}
 */
export default (id = false) => Request.get(`/contacts/${id}`);
