import { LoginData, SignupData } from '../api/auth';
declare class AuthController {
    private api;
    constructor();
    login(data: LoginData): Promise<void>;
    signup(data: SignupData): Promise<void>;
    getUser(): Promise<void>;
    logout(): Promise<void>;
}
declare const _default: AuthController;
export default _default;
