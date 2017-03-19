import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    yogi: {key: 'yogiID'}
  }
});
