import Block from './block';
import Route from './route';
import store from './store';

export class Router {
  private static __instance: Router = new Router('#app');

  public routes: Route[] = [];

  public history = window.history;

  private currentRoute: Route | null = null;

  private pages: string[];

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      throw new Error('Router уже существует');
    }
    this.rootQuery = rootQuery;
    this.routes = [];
    this.pages = [
      '/',
      '/log-in',
      '/sign-up',
      '/settings',
      '/profile',
      '/404',
      '/500',
      '/messenger',
    ];

    Router.__instance = this;
  }

  public static getInstance():Router {
    return Router.__instance;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this.rootQuery);

    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  private getRoute(pathname: string) {
    if (!this.pages.includes(pathname)) {
      pathname = '/404';
    } else {
      const state = store.getState();
      if (state.user) {
        if (pathname === '/' || pathname === '/log-in' || pathname === '/sign-up') {
          pathname = '/messenger';
        }
      } else if (pathname !== '/' && pathname !== '/log-in'
      && pathname !== '/sign-up' && pathname !== '/404' && pathname !== '/500') {
        pathname = '/';
      }
    }
    return this.routes.find((route) => route.match(pathname));
  }
}
const router = Router.getInstance();

export default router;
