import Block from '../../core/block';
import { StateData } from '../chats/index';
export declare class LoginBase extends Block {
    constructor(data: StateData);
    protected render(): DocumentFragment;
}
declare const Login: {
    new (props: any): {
        [x: string]: any;
    };
    [x: string]: any;
};
export default Login;
