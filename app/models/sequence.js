import DS from 'ember-data';

export default DS.Model.extend({
  yogi: DS.belongsTo("yogi", {async: true})
});
