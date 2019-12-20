import Request from '../../utils/Request';

/**
 * Getting all the contacts.
 *
 * @request
 * @return {Promise<AxiosResponse<T>>}
 */
export default () => Request.get("/contacts");
