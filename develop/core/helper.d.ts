import Block from './block';
export interface BlockConstructor<Props = any> {
    new (props: Props): Block;
    helper: string;
}
export default function registerComponent(Component: BlockConstructor<any>): void;
