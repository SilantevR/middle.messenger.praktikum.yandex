import Block from '../../core/block';
export interface StateData {
    user: {
        avatar: string;
        display_name: string;
        email: string;
        first_name: string;
        id: number;
        login: string;
        phone: string;
        second_name: string;
    };
    messages: [
        {
            content: string;
            time: string;
            user_id: boolean;
        }
    ];
    chats: [
        {
            avatar: string | null;
            created_by: number;
            id: number;
            last_message: number | null;
            title: string;
            unread_count: number;
        }
    ];
}
export declare class ChatsBase extends Block {
    scroll: number;
    constructor(data: StateData);
    _init(): void;
    protected render(): DocumentFragment;
}
declare const Chats: {
    new (props: any): {
        [x: string]: any;
    };
    [x: string]: any;
};
export default Chats;
