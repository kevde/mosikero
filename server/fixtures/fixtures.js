// import Song from './lib/models/Song';
import { Songs } from '/lib/collections/Songs.js';

export function dumpSongs() {
  Songs.insert({ title: 'Song 1', artists: ['Java1', 'Java2'] });
  Songs.insert({ title: 'Song 1', artists: ['Java1', 'Java2'] });
  Songs.insert({ title: 'Song 1', artists: ['Java1', 'Java2'] });
}
