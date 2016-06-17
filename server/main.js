import { Meteor } from 'meteor/meteor';
import * as fixtures from './fixtures/fixtures.js';

Meteor.startup(() => {
  fixtures.dumpSongs();
});
