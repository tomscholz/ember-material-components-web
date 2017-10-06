import Ember from 'ember';
import layout from '../../../templates/components/mdc-list/item/text';

export default Ember.Component.extend({
  //region Ember Hooks
  layout,
  tagName: 'span',
  classNames: ['mdc-list-item__text'],
  //endregion
});
