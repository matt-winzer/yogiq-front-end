import Ember from 'ember';

export default Ember.Controller.extend({
  sortProps: ['name'],
  asanasByName: Ember.computed.sort('model', 'sortProps')
});
