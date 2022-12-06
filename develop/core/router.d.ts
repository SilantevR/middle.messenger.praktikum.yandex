import Block from './block';
import Route from './route';
export declare class Router {
    private readonly rootQuery;
    private static __instance;
    routes: Route[];
    history: History;
    private currentRoute;
    private pages;
    constructor(rootQuery: string);
    static getInstance(): Router;
    use(pathname: string, block: typeof Block): this;
    start(): void;
    go(pathname: string): void;
    back(): void;
    forward(): void;
    private _onRoute;
    private getRoute;
}
declare const router: Router;
export default router;
