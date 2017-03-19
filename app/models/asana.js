import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  time: DS.attr(),
  imageURL: DS.attr(),
  audioURL: DS.attr(),
  firstTarget: DS.attr(),
  secondTarget: DS.attr(),
  thirdTarget: DS.attr(),
  asanaSequences: DS.attr()
});
