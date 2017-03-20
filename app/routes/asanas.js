import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.get('store').findAll('asana');
    return this.get('store').findAll('asana');
  },

  setupController(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after

    let asanas = model.content;
    console.log(asanas);
    asanas.forEach((asana, index, array) => {
      controller.set(`asana${index}`, asana);
    })
  }
});
