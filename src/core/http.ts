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
  const arr = ['?'];
  Object.keys(data).forEach((key) => arr.push(`${key}=${data[key]}&`));
  return arr.join('').slice(0, -1);
}

class HTTPTransport {
  get = (url:string, options = {}) => this.request(url, {
    ...options, method: HTTPMethods.GET,
  });

  put = (url:string, options = {}) => this.request(url, {
    ...options, method: HTTPMethods.PUT,
  });

  post = (url:string, options = {}) => this.request(url, {
    ...options, method: HTTPMethods.POST,
  });

  delete = (url:string, options = {}) => this.request(url, {
    ...options, method: HTTPMethods.DELETE,
  });

  request = (url:string, options: {
     method: any; headers?: any; data?: any;
    }, timeout = 5000) => {
    const { headers = {}, data, method } = options;

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

      xhr.onload = function res() {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (HTTPMethods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

function fetchWithRetry(url: any, options: any):any {
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
}
