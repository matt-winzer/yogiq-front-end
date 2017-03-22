import Ember from 'ember';

export default Ember.Controller.extend({
  editMode: false,
  currentPoses: [],
  useSwap: false,
  sortFinishText: null,

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
          as.set('sortOrder', newSortOrder);
        });
      })
    },

    sortEndAction: function() {
      console.log('Sort End', this.get('model.asanasequences'));
    }
  }

});
