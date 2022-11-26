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

export default class HTTPTransport {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  get = (url:string, options = {}) => this.request(this._url + url, {
    ...options, method: HTTPMethods.GET,
  });

  put = (url:string, options = {}) => this.request(this._url + url, {
    ...options, method: HTTPMethods.PUT,
  });

  post = (url:string, options = {}) => this.request(this._url + url, {
    ...options, method: HTTPMethods.POST,
  });

  delete = (url:string, options = {}) => this.request(this._url + url, {
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
      let query;
      if (method === HTTPMethods.GET && data) {
        query = `${url}${queryStringify(data)}`;
      } else {
        query = url;
      }
      xhr.open(method, query);

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
        } else {
          throw new Error(xhr.response.reason);
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
