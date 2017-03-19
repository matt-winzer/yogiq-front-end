import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
  return this.get('store').findRecord('yogi', params.id);
}

// model(params) {
//   return Ember.RSVP.hash({
//     yogi: this.get('store').findRecord('yogi', params.id),
//     sequence: this.get('store').findRecord('sequence', params.id)
//   });
// }

});
