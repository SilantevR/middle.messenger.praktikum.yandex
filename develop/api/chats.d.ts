import HTTP from '../core/http';
import BaseAPI from './base';
export interface CreateChat {
    title: string;
}
export default class Chats extends BaseAPI {
    HTTPTransport: HTTP;
    createChat(title: string): Promise<unknown>;
    deleteChat(id: string): Promise<unknown>;
    chats(): Promise<unknown>;
    addUser(chatId: number, userId: number): Promise<unknown>;
    deleteUser(chatId: number, userId: number): Promise<unknown>;
    chatUsers(chatId: number): Promise<unknown>;
    chatToken(id: number): Promise<unknown>;
}
