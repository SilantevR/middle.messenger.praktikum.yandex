/* eslint-disable no-unused-vars */
enum HTTPMethods {
      GET = 'GET',
      PUT = 'PUT',
      POST = 'POST',
      DELETE = 'DELETE'
}

function queryStringify(data: any): string {
  if (typeof data !== 'object') {
    throw new Error('Error');
  }
  return `?${Object
    .entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`;
}

type Options = {
  headers?: Record<string, string>;
  data?: any;
  withCredentials?: boolean,
  type?: string
};

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>
export default class HTTPTransport {
  private _url: string;

  static BASE_URL = 'https://ya-praktikum.tech/api/v2';

  query: string;

  constructor(url: string) {
    this._url = `${HTTPTransport.BASE_URL}${url}`;
  }

  get: HTTPMethod = (url, options = {}) => {
    let query = '';
    if (options.data) {
      query = `/${queryStringify(options.data)}`;
    }
    return this.request(this._url + url + query, { ...options, method: HTTPMethods.GET });
  };

  put: HTTPMethod = (url, options = {}) => this.request(this._url + url, {
    ...options, method: HTTPMethods.PUT,
  });

  post: HTTPMethod = (url, options = {}) => this.request(this._url + url, {
    ...options, method: HTTPMethods.POST,
  });

  delete: HTTPMethod = (url, options = {}) => this.request(this._url + url, {
    ...options, method: HTTPMethods.DELETE,
  });

  request = <Response>(url:string, options: {
     method: HTTPMethods;
     headers?: Record<string, string>;
     data?: any;
     withCredentials?: boolean,
     type?: string
    }, timeout = 5000): Promise<Response> => {
    const {
      headers = {}, data, method, withCredentials,
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      this.query = url;
      xhr.open(method, this.query);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
      if (withCredentials) {
        xhr.withCredentials = withCredentials;
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.responseType = 'json';

      if (method === HTTPMethods.GET || !data) {
        xhr.send();
      } else if (options.type) {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }

      xhr.onload = () => {
        if (xhr.status < 400) {
          resolve(xhr.response);
          // console.log(xhr.status)
        } else {
          reject(xhr.response.reason);
        }
      };
    });
  };
}

/* export function fetchWithRetry(url: any, options: any):any {
  const http = new HTTPTransport();
  const { attempt = 1 } = options;

  function errCounter(error: any) {
    const times = attempt - 1;
    if (!times) {
      throw error;
    }

    return fetchWithRetry(url, { ...options, attempt: times });
  }

  return http.get(url, options).catch(errCounter);
} */
