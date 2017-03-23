import Ember from 'ember';

export default Ember.Route.extend({
  hifi: Ember.inject.service(),
  model(params) {
    return this.get('store').findRecord('sequence', params.sequence_id);
  },

  audioUrl: 'https://earbyter-1.s3.amazonaws.com/hideyourkids.m4a',

  actions: {
    playAudio: function() {
      this.get('hifi').play(this.get('audioUrl')).then(({sound}) => {
        // sound object
        // return {sound}
      }).catch(error => {
        console.log('error from route');
      })
    }
  }

});
