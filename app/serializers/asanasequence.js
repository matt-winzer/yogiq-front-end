import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    asana: {key: 'asanaID'},
    sequence: {key: 'sequenceID'}
  }
});
