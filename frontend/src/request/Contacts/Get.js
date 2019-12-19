import Request from '../../utils/Request';

/**
 * Getting all the taxes.
 *
 * @request
 * @return {Promise<AxiosResponse<T>>}
 */
export default () => Request.get("/contacts");
