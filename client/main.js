import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Songs } from '/lib/collections/Songs.js';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.Song.onCreated(() => {
  this.songs = Songs.find();
})

Template.Song.helpers({
  songs: Songs.find()
})

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button' (event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
