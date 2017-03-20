import Ember from 'ember';

export default Ember.Controller.extend({
  sortProps: ['name'],
  sortedAsanas: Ember.computed.sort('model', 'sortProps')
});
