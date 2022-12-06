import Block from '../../core/block';
interface MessageProps {
    page: string;
    type: string;
    name: string;
    value: string;
    text: string;
    required: string;
}
export default class MessageInput extends Block {
    static helper: string;
    constructor(props: MessageProps);
    protected render(): DocumentFragment;
}
export {};
