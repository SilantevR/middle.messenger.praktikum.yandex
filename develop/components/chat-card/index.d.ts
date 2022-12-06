import Block from '../../core/block';
export interface ChatData {
    avatar: string | null;
    created_by: number;
    id: number;
    last_message: number | null;
    title: string;
    unread_count: number;
}
export default class ChatCard extends Block {
    static helper: string;
    constructor(data: ChatData);
    protected render(): DocumentFragment;
}
