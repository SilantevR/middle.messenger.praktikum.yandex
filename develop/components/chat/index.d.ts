import Block from '../../core/block';
import { StateData } from '../../pages/chats';
export declare class ChatBase extends Block {
    static helper: string;
    constructor(data: StateData);
    protected render(): DocumentFragment;
}
declare const Chat: {
    new (props: any): {
        [x: string]: any;
    };
    [x: string]: any;
};
export default Chat;
