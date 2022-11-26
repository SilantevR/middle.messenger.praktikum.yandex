import Block from './block';

export default class Route {
  private pathname: string;

  private BlockClass: typeof Block;

  private block: Block | null;

  private query: any;

  constructor(pathname: string, view: typeof Block, query: any) {
    this.pathname = pathname;
    this.BlockClass = view;
    this.block = null;
    this.query = query;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.getContent()?.remove();
    }
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.BlockClass({});
    }

    const root = document.querySelector(this.query);

    if (!root) {
      throw new Error('Root not found');
    }

    root.innerHTML = '';
    root.appendChild(this.block.getContent());
  }
}
