import Song from '/lib/models/Song.ts';
import { Songs } from '/lib/collections/Songs.js';

export function dumpSongs() {
  let song1 = new Song('Rogue', ['Madonna'], "Burn baby");
  let song2 = new Song('S&M', ['Rihanna'], "S & M");
  let song3 = new Song('Ikaw', ['Yeng Constantino'], "Sa pagpatak");
  Songs.insert(song1);
  Songs.insert(song2);
  Songs.insert(song3);
}
