import 'reflect-metadata';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import { SongList } from '/client/imports/song-list/songList.ts';
import { SongInfo } from '/client/imports/song-info/songInfo.ts';

@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'SongList', component: SongList },
  { path: '/song/:songId', name: 'SongInfo', component: SongInfo }
])
export class Mosikero {
	constructor() {

	}
}

bootstrap(Mosikero, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
