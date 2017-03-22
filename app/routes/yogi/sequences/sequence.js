import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('sequence', params.sequence_id);
  },

  // model(params) {
  //
  //   return Ember.RSVP.hash({
  //     sequence: this.get('store').findRecord('sequence', params.sequence_id),
  //     tryme: this.get('store').query('asanasequence', {
  //       filter: {
  //         sequence: params.sequence_id
  //       }
  //     }).then(function(asses) {
  //       asses.map((ass, index, array) => {
  //         ass = {
  //           id: ass.id,
  //           sortOrder: ass.get('sortOrder'),
  //           // asanaName: ass.get('asana').content.data.name,
  //           // asana: ass.get('asana').content.data.get('name'),
  //           sequenceID: ass.get('sequence').content.id
  //         }
  //         // console.log(ass);
  //         // asArray.pushObject(ass);
  //         // return ass;
  //       })
  //     }),
  //
  //   });
  // },
  //
  // setupController(controller, model) {
  //   // Call _super for default behavior
  //   this._super(controller, model);
  //   // Implement your custom setup after
  //
  //   let tester = model
  //   console.log(tester);
  //
  //   // console.log(model);
  // }
});

// as.then(asequences => {
//   console.log(asequences);
// })
// asanas.forEach((asana, index, array) => {
//   controller.set(`asana${index}`, asana);
// })
