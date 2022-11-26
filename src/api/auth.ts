import HTTP from '../core/http';
import BaseAPI from './base';

export interface LoginData {
    login: string
    password: string
  }

export interface SignupData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string,
    avatar: string | null;
    display_name: string | null
  }

export default class Auth extends BaseAPI {
  HTTPTransport = new HTTP('https://ya-praktikum.tech/api/v2/auth');

  public login(data: LoginData) {
    const options: Record<string, unknown> = {};
    options.data = data;
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;

    return this.HTTPTransport.post('/signin', options);
  }

  public signup(data: SignupData) {
    const options: Record<string, unknown> = {};
    options.data = data;
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;

    return this.HTTPTransport.post('/signup', options);
  }

  public request() {
    const options: Record<string, {}> = {
      headers: {
        'content-type': 'application/json',
      },
      withCredentials: true,
    };
    return this.HTTPTransport.get('/user', options);
  }

  public logout() {
    const options: Record<string, {}> = {
      headers: {
        'content-type': 'application/json',
      },
      withCredentials: true,
    };

    return this.HTTPTransport.post('/logout', options);
  }
}
