import HTTP from '../core/http';
import BaseAPI from './base';
import { SignupData } from './auth';
export interface ChangePassword {
    oldpassword: string;
    newPassword: string;
}
export default class User extends BaseAPI {
    HTTPTransport: HTTP;
    updateData(data: SignupData): Promise<unknown>;
    updatePassword(data: ChangePassword): Promise<unknown>;
    updateAvatar(formData: FormData): Promise<unknown>;
    getUserByLogin(login: string): {};
}
