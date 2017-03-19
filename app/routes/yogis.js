import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get("store").findAll("yogi");
  }
  // model() {
  //   return Ember.RSVP.hash({
  //     yogis: this.get('store').findAll('yogi'),
  //     sequences: this.get('store').findAll('sequence')
  //   });
  // }
});
