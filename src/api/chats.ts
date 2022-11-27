import HTTP from '../core/http';
import BaseAPI from './base';

export interface CreateChat {
    title: string
}

export default class Chats extends BaseAPI {
  HTTPTransport = new HTTP('/chats');

  createChat(title: string) {
    const options: Record<string, any> = {};
    options.data = { title };
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.post('', options);
  }

  deleteChat(id:string) {
    const options: Record<string, any> = {};
    options.data = { chatId: id };
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.delete('', options);
  }

  chats() {
    const options: Record<string, any> = {};
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.get('', options);
  }

  addUser(chatId: number, userId: number) {
    const options: Record<string, any> = {};
    options.data = { users: [userId], chatId };
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.put('/users', options);
  }

  deleteUser(chatId: number, userId: number) {
    const options: Record<string, any> = {};
    options.data = { users: [userId], chatId };
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.delete('/users', options);
  }

  chatUsers(chatId: number) {
    const options: Record<string, any> = {};
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;
    return this.HTTPTransport.get(`/${chatId}/users`, options);
  }

  chatToken(id: number) {
    const options: Record<string, any> = {};
    options.headers = {
      'content-type': 'application/json',
    };
    options.withCredentials = true;

    return this.HTTPTransport.post(`/token/${id}`, options);
  }
}
