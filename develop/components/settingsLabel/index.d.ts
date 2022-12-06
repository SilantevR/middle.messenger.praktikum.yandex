import Block from '../../core/block';
import { LabelProps } from '../label/index';
export default class SettingsLabel extends Block {
    static helper: string;
    constructor(props: LabelProps);
    protected render(): DocumentFragment;
}
