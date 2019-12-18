
export default class AbstractRequests {
    _requests = null;

    /**
     * Defining the requests services
     *
     * @param requests
     */
    constructor(requests) {
        this._requests = requests;

        if (this.requests === undefined) {
            throw new Error("You need set up the request provider.");
        }
    }

    /**
     * Retrieve all the requests.
     *
     * @service
     * @returns requests
     */
    get requests() {
        return this._requests;
    }

    /**
     * Set up the requests classes on configuration.
     *
     * @service
     * @param value
     */
    set requests(value) {
        this._requests = value;
    }

    /**
     * Abstract get request.
     *
     * @service
     * @returns {null|Promise<AxiosResponse<T>>|*}
     */
    get() {
        if (this.requests) {
            return this.requests.Get();
        }

        return null;
    }

    /**
     * Abstract find request.
     *
     * @service
     * @param id
     * @returns {null|Promise<AxiosResponse<T>>|*}
     */
    find(id = null) {
        if (id && this.requests) {
            return this.requests.Find(id);
        }

        return null;
    }

    /**
     * Abstract created request.
     *
     * @service
     * @param data
     * @returns {null|*}
     */
    create(data = null) {
        if (data && this.requests) {
            return this.requests.Create(data);
        }

        return null;
    }

    /**
     * Abstract update request.
     *
     * @service
     * @param id
     * @param data
     * @returns {null|Promise<AxiosResponse<T>>|*}
     */
    update(id = null, data = null) {
        if (id && data && this.requests) {
            return this.requests.Update(id, data);
        }

        return null;
    }

    /**
     * Abstract delete request.
     *
     * @service
     * @param id
     * @returns {null|Promise<AxiosResponse<T>>|*}
     */
    delete(id = null) {
        if (id && this.requests) {
            return this.requests.Delete(id);
        }

        return null;
    }
}
