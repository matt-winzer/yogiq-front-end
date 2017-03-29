import DS from 'ember-data';
import ENV from 'yogiq-front-end/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.host,
  namespace: 'api'
});
