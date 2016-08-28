import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { GoogleMaps } from 'google-maps';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

let MAP_ZOOM = 15;

Meteor.startup(() => {
  GoogleMaps.load();
  render(<App />, document.getElementById('render-target'));
});
