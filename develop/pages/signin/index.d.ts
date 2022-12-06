import Block from '../../core/block';
import { StateData } from '../chats/index';
export declare class SigninBase extends Block {
    constructor(data: StateData);
    protected render(): DocumentFragment;
}
declare const Signin: {
    new (props: any): {
        [x: string]: any;
    };
    [x: string]: any;
};
export default Signin;
