import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './settingsInput';

export default class SettingsInput extends Block {
  static helper = 'SettingsInput';

  protected render() {
    return this.compile(Handlebars.compile(template), this.props);
  }
}
