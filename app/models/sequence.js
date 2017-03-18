import DS from 'ember-data';

export default DS.Model.extend({
  yogiID: DS.attr(),
  yogi: DS.belongsTo('yogi', {async: true})
});
