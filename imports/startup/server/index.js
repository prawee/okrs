console.log('index.js of server is loaded.');

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('server startup()');
});