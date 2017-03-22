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

    sortEndAction: function() {
      let as = this.get('model.asanasequences');
      as.forEach((item, index, array) => {
        console.log(item.get('sortOrder'));
      })
      console.log('Sort End', this.get('model.asanasequences'), this.get('model.asanasequences').objectAt(0).get('sortOrder'));
    }
  }

});
