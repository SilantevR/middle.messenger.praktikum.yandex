export default class Block<Props extends Record<string, any> = {}> {
    static EVENTS: {
        INIT: string;
        FLOW_CDM: string;
        FLOW_CDU: string;
        FLOW_RENDER: string;
        FLOW_ADD_EVENTS: string;
    };
    id: string;
    children: {
        [id: string]: Block;
    };
    refs: Record<string, Block>;
    props: Props;
    events: {
        [key: string]: (a: Event) => void;
    };
    private _element;
    private _eventBus;
    static componentName: string | undefined;
    constructor(props?: object);
    private _registerEvents;
    getContent(): HTMLElement | null;
    protected componentDidMount(): boolean;
    private _componentDidMount;
    protected dispatchComponentDidMount(): void;
    protected componentDidUpdate(oldProps: any, newProps: any): boolean;
    private _componentDidUpdate;
    setProps: (nextProps: any) => void;
    protected render(): DocumentFragment;
    private init;
    _init(): void;
    private _render;
    compile(template: (context: any) => string, context: any): DocumentFragment;
    private get element();
    private _makePropsProxy;
    private addEvents;
    private removeEvents;
}
