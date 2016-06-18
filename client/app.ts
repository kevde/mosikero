import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import template from './app.jade';

@Component({
  selector: 'app',
  template: template
})
class Mosikero {
  songs: Array<Object>;
}

bootstrap(Mosikero);