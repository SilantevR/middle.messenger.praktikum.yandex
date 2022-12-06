import { SignupData } from '../api/auth';
import { ChangePassword } from '../api/user';
declare class UserController {
    private api;
    constructor();
    update(data: SignupData): Promise<void>;
    changePassword(data: ChangePassword): Promise<void>;
    changeAvatar(formData: FormData): Promise<void>;
    getUserByLogin(login: string): Promise<{}>;
}
declare const _default: UserController;
export default _default;
