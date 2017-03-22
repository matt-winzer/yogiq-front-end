import Ember from 'ember';

export default Ember.Controller.extend({
  editMode: false,
  currentPoses: [],
  testArray: [{
    id: 1,
    name: 'matt'
  },
  { id: 2,
    name: 'Jeremy'
  }
],
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

    sortEndAction: function() {
      console.log('Sort Ended', this.get('sortableObjectList'));
    }
  }

});
