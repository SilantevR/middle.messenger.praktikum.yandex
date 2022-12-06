import Block from './block';
export default class Route {
    private pathname;
    private BlockClass;
    private block;
    private query;
    constructor(pathname: string, view: typeof Block, query: any);
    navigate(pathname: string): void;
    leave(): void;
    match(pathname: string): boolean;
    render(): void;
}
