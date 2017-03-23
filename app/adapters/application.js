import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // host: "http://localhost:3000",
  host: "https://yogiq.herokuapp.com",
  namespace: 'api'
});
