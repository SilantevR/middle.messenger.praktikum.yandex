import HTTP from '../core/http';
import BaseAPI from './base';
export interface LoginData {
    login: string;
    password: string;
}
export interface SignupData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
    avatar: string | null;
    display_name: string | null;
}
export default class Auth extends BaseAPI {
    HTTPTransport: HTTP;
    login(data: LoginData): Promise<unknown>;
    signup(data: SignupData): Promise<unknown>;
    request(): Promise<unknown>;
    logout(): Promise<unknown>;
}
