import DS from 'ember-data';

export default DS.Model.extend({
  asana: DS.belongsTo('asana', {async: true}),
  sequence: DS.belongsTo('sequence', {async: true}),
  sortOrder: DS.attr('number')
});
