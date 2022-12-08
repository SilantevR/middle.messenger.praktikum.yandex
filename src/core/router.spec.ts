/* eslint-disable max-classes-per-file */
import { expect } from 'chai';
import Handlebars from 'handlebars';
import router, { Router } from './router';
import Route from './route';
import store from './store';
import withStore from './withStore';
import Block from './block';

const template1 = '<div id="body">1</div>';
const template2 = '<div id="body">2</div>';
const template3 = '<div id="body">404</div>';
const template4 = '<div id="body">messenger</div>';

class Page extends Block {
  constructor(data: any) {
    super({ data });
  }

  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template1), this.props);
  }
}
const withUser = withStore((state) => (state));
const StatePage = withUser(Page);

class AnotherPage extends Block {
  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template2), this.props);
  }
}
class Page404 extends Block {
  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template3), this.props);
  }
}
class Messenger extends Block {
  protected render(): DocumentFragment {
    return this.compile(Handlebars.compile(template4), this.props);
  }
}

router.use('/', StatePage as typeof Block);
router.use('/sign-up', AnotherPage as typeof Block);
router.use('/another', AnotherPage as typeof Block);
router.use('/404', Page404 as typeof Block);
router.use('/messenger', Messenger as typeof Block);

describe('Router тестирование', () => {
  it('Router тест SINGLETON', () => {
    try {
      new Router('body');
    } catch (err) {
      expect(err.message).to.equal('Router уже существует');
    }
  });
  it('Router тест REGISTERROUTES', () => {
    expect(router.routes[0]).to.be.an.instanceof(Route);
    expect(router.routes[1]).to.be.an.instanceof(Route);
  });
  it('Router тест STARTROUTES', () => {
    router.start();
    const root = document.getElementById('app');
    expect(root?.innerHTML).to.equal('<div id="body">1</div>');
    expect(window.history.length).to.equal(1);
  });
  it('Router тест RENDERANOTHERPAGE', () => {
    router.go('/sign-up');
    const root = document.getElementById('app');
    expect(root?.innerHTML).to.equal('<div id="body">2</div>');
    expect(window.history.length).to.equal(2);
  });
  it('Router тест RENDER404PAGE', () => {
    router.go('/another');
    const root = document.getElementById('app');
    expect(root?.innerHTML).to.equal('<div id="body">404</div>');
    expect(window.history.length).to.equal(3);
  });
  it('Router тест RENDERWITHOUTSTORE', () => {
    router.go('/messenger');
    const root = document.getElementById('app');
    expect(root?.innerHTML).to.equal('<div id="body">1</div>');
    expect(window.history.length).to.equal(4);
  });
  it('Router тест RENDERWITHSTORE', () => {
    store.set('user', {
      display_name: 'Admin',
      email: 'Admin@mail',
      first_name: 'Admin',
      id: '12345',
    });
    router.go('/');
    const root = document.getElementById('app');
    expect(root?.innerHTML).to.equal('<div id="body">messenger</div>');
  });
});

describe('Route тестирование', () => {
  it('Route тест RENDERPAGE', () => {
    const route = router.routes[0];
    route.navigate('/');
    const root = document.getElementById('app');
    expect(root?.innerHTML).to.equal('<div id="body">1</div>');
    route.leave();
    expect(root?.innerHTML).to.equal('');
  });
});
