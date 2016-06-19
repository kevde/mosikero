import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import template from './app.jade';
import { Songs } from '/lib/collections/Songs.js';
import { SongForm } from './imports/SongForm';


@Component({
  selector: 'app',
  template: template,
  directives: [SongForm]
})
class Mosikero {
  songs: Mongo.Cursor < Object > ;

  constructor() {
    this.songs = Songs.find();
  }

  removeSong(song) {
    Songs.remove(song._id);
  }
}

bootstrap(Mosikero);
