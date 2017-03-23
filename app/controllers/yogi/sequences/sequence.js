import Ember from 'ember';

export default Ember.Controller.extend({
  hifi: Ember.inject.service(),
  editMode: false,
  currentPoses: [],
  useSwap: false,
  sortFinishText: null,
  sortByOrder: ['sortOrder'],
  sortedAsanas: Ember.computed.sort('model.asanasequences', 'sortByOrder'),
  audioUrl: 'https://earbyter-1.s3.amazonaws.com/hideyourkids.m4a',
  audioUrl2: '/assets/audio/mindfulness-bell-cut.mp3',
  playingAudio: false,
  position: '',

  actions: {
    test: function() {
      this.set('editMode', true);
      this.get('currentPoses').set('[]');
      let as = this.get('model.asanasequences');

      as.forEach((as, index, array) => {
        let a = {
          id: as.id,
          sortOrder: as.get('sortOrder'),
          sequenceID: as.get('sequence.id'),
          asana: as.get('asana.content.data')
        }
        this.get('currentPoses').pushObject(a);
      })
      console.log(this.get('currentPoses'));
    },

    sort: function() {
      console.log('hello');
      this.get('model.asanasequences').sortBy('sortOrder');
    },

    editPoses: function() {
      this.toggleProperty('editMode');
    },

    savePoses: function() {
      this.toggleProperty('editMode');
      let as = this.get('model.asanasequences');
      let currentSequence = this.get('model.id');
      // console.log(currentSequence);
      as.forEach((item, index, array) => {
        let asID = item.id;
        let sortOrder = item.get('sortOrder');
        let newSortOrder = index + 1;
        console.log('AS-ID:', asID);
        console.log('New Sort:', newSortOrder);
        console.log('Current Sort:', sortOrder);
        this.get('store').findRecord('asanasequence', asID).then(as => {
          let so = as.get('sortOrder');
          if (so !== newSortOrder) {
            as.set('sortOrder', newSortOrder);
            as.save();
          }
        });
      })
    },

    sortEndAction: function() {
      console.log('Sort End', this.get('model.asanasequences'));
    },

    playAudio: function() {
      this.set('playingAudio', true);
      this.get('hifi').play(this.get('audioUrl2')).then((sound) => {
        // return {sound};
      }).catch(error => {
        console.log('error from controller');
      })
    },

    pauseAudio: function() {
      this.set('playingAudio', false)
      this.get('hifi').pause();
    },

    rewindAudio: function() {
      this.get('hifi').rewind(20);
    },

    fastForward: function() {
      this.get('hifi').fastForward(3000);
    }
  }

});

// this.get('model.asanasequences').sortBy('sortOrder')
