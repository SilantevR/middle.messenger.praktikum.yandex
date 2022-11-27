import Block from '../../core/block';
import template from './settingsInput.hbs';

export default class SettingsInput extends Block {
  static helper = 'SettingsInput';

  protected render() {
    return this.compile(template, this.props);
  }
}
