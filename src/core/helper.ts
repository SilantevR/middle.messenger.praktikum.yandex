/* eslint-disable no-unused-vars */
import { HelperOptions } from 'handlebars';
import handlebars from 'handlebars/dist/handlebars.runtime';
import Block from './block';

export interface BlockConstructor<Props = any> {
    new(props: Props): Block;
    helper:string;
}

export default function registerComponent(Component: BlockConstructor<any>) {
  handlebars.registerHelper(
    Component.helper,
    function helper(this: unknown, { data, fn, hash }: HelperOptions) {
      if (!data.root.children) {
        data.root.children = {};
      }

      if (!data.root.refs) {
        data.root.refs = {};
      }

      const { children } = data.root;

      const component = new Component(hash);

      if (hash.pattern) {
        data.root.refs[hash.pattern] = component;
      }

      children[component.id] = component;

      const contents = fn ? fn(this) : '';

      return `<div data-id="id-${component.id}">${contents}</div>`;
    },
  );
}
