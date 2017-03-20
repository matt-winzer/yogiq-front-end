import Ember from 'ember';

export default Ember.Controller.extend({
  sortValueName: ['name'],
  sortValueTarget: ['firstTarget'],
  asanasByName: Ember.computed.sort('model', 'sortValueName'),
  asanasByTarget: Ember.computed.sort('model', 'sortValueTarget'),
  sortByName: true,
  sortById: false,
  sortByTarget: false,
  actions: {
    sortName: function() {
      this.set('sortById', false);
      this.set('sortByTarget', false);
      this.set('sortByName', true);
    },
    sortId: function() {
      this.set('sortByName', false);
      this.set('sortByTarget', false);
      this.set('sortById', true);
    },
    sortTarget: function() {
      this.set('sortByName', false);
      this.set('sortById', false);
      this.set('sortByTarget', true);
    }
  }
});
