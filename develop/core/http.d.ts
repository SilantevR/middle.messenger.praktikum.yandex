declare enum HTTPMethods {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE"
}
declare type Options = {
    headers?: Record<string, string>;
    data?: any;
    withCredentials?: boolean;
    type?: string;
};
declare type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;
export default class HTTPTransport {
    private _url;
    static BASE_URL: string;
    query: string;
    constructor(url: string);
    get: HTTPMethod;
    put: HTTPMethod;
    post: HTTPMethod;
    delete: HTTPMethod;
    request: <Response_1>(url: string, options: {
        method: HTTPMethods;
        headers?: Record<string, string>;
        data?: any;
        withCredentials?: boolean;
        type?: string;
    }, timeout?: number) => Promise<Response_1>;
}
export {};
