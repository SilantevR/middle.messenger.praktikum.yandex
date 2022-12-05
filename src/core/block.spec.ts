/* eslint-disable import/no-extraneous-dependencies, max-classes-per-file */
import { expect } from 'chai';
import Handlebars from 'handlebars';
import Block from './block';

const template = '<div id="body">{{prop}}</div>';
const templateWithChildren = '<div id="body">{{{Link  index="sign-up" title="Зарегистрироваться"}}}</div>';
const templateChild = '<a href="/{{index}}">{{title}}</a>';

describe('Block тестирование', () => {
  class Component extends Block {
    protected render(): DocumentFragment {
      return this.compile(Handlebars.compile(template), this.props);
    }
  }
  class ComponentWithChildren extends Block {
    protected render(): DocumentFragment {
      return this.compile(Handlebars.compile(templateWithChildren), this.props);
    }
  }
  class Link extends Block {
    static helper = 'Link';

    protected render() {
      return this.compile(Handlebars.compile(templateChild), this.props);
    }
  }

  Handlebars.registerHelper(
    Link.helper,
    function helper(this: unknown, { data, fn, hash }) {
      if (!data.root.children) {
        data.root.children = {};
      }

      if (!data.root.refs) {
        data.root.refs = {};
      }

      const { children } = data.root;

      const component = new Link(hash);

      if (hash.pattern) {
        data.root.refs[hash.pattern] = component;
      }

      children[component.id] = component;

      const contents = fn ? fn(this) : '';

      return `<div data-id="id-${component.id}">${contents}</div>`;
    },
  );

  let eventCount = 0;

  let component = new Component({
    prop: 1,
    events: {
      click: () => {
        eventCount = 1;
      },
    },
  }) as any;

  const root = document.getElementById('app');
  root?.append(component.getContent());

  it('Block тест INITWITHPROPS', () => {
    const props = component.props as any;
    expect(props.prop).to.equal(1);
  });
  it('Block тест RENDERWITHPROPS', () => {
    expect(root?.innerHTML).to.equal('<div id="body">1</div>');
  });

  it('Block тест DOMEVENTSWORK', () => {
    const element = document.getElementById('body');
    element?.dispatchEvent(new CustomEvent('click', { bubbles: true, cancelable: false }));
    expect(eventCount).to.equal(1);
  });
  it('Block тест SETPROPSWORK', () => {
    component.setProps({ prop: 2 });
    const props = component.props as any;
    expect(props.prop).to.equal(2);
  });
  it('Block тест RENDERWITHNEWPROPS', () => {
    expect(root?.innerHTML).to.equal('<div id="body">2</div>');
  });

  it('Block тест RENDERWITHCHILD', () => {
    component = new ComponentWithChildren({
      prop: 3,
    }) as any;
    const element = document.getElementById('body');
    element?.remove();
    root?.append(component.getContent());
    expect(root?.innerHTML).to.equal('<div id="body"><a href="/sign-up">Зарегистрироваться</a></div>');
  });
});
