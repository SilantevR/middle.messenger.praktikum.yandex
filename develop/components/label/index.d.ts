import Block from '../../core/block';
export interface LabelProps {
    page: string;
    type: string;
    name: string;
    value: string;
    text: string;
    required: string;
}
export default class Label extends Block {
    static helper: string;
    constructor(props: LabelProps);
    protected render(): DocumentFragment;
}
