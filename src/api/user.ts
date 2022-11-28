import HTTP from '../core/http';
import BaseAPI from './base';
import { SignupData } from './auth';

export interface ChangePassword {
    oldpassword: string,
    newPassword: string
}
export default class User extends BaseAPI {
  HTTPTransport = new HTTP('/user');

  updateData(data: SignupData) {
    const options: Record<string, any> = {};
    options.data = data;
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.put('/profile', options);
  }

  updatePassword(data: ChangePassword) {
    const options: Record<string, any> = {};
    options.data = data;
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.put('/password', options);
  }

  updateAvatar(formData: FormData) {
    const options: Record<string, any> = {};
    options.data = formData;
    options.type = 'file';
    options.withCredentials = true;
    return this.HTTPTransport.put('/profile/avatar', options);
  }

  // eslint-disable-next-line consistent-return
  getUserByLogin(login: string): {} {
    const options: Record<string, any> = {};
    options.data = { login };
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.post('/search', options);
  }
}
