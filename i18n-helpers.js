import { getMessage } from '../../ui/helpers/utils/i18n-helpers';
import * as en from '../../app/_locales/en/messages.json';

export function tEn(key) {
  return getMessage('en', en, key, (2020));
}
