import BaseAbility from './base';
import { get } from '@ember/object';

export default class IntentionAbility extends BaseAbility {
  resource = 'intention';

  get canWrite() {
    return super.canWrite && (typeof this.item === 'undefined' || this.item.IsEditable);
  }
}
