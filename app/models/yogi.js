import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  bio: DS.attr(),
  profilePic: DS.attr(),
  dateCreated: DS.attr('date'),
  sequences: DS.hasMany("sequence", {async: true})
});
