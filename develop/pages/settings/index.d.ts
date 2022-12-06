import Block from '../../core/block';
import { StateData } from '../chats/index';
export declare class SettingsBase extends Block {
    constructor(data: StateData);
    _init(): void;
    protected render(): DocumentFragment;
}
declare const Settings: {
    new (props: any): {
        [x: string]: any;
    };
    [x: string]: any;
};
export default Settings;
