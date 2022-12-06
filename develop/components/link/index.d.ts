import Block from '../../core/block';
interface LinkProps {
    index: string;
    page: string;
    title: string;
}
export default class Link extends Block {
    static helper: string;
    constructor(props: LinkProps);
    protected render(): DocumentFragment;
}
export {};
