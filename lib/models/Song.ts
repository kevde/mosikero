export default class Song {
  title: string;
  artists: string[];
  lyrics: string;

  constructor(title: string, artists: string[], lyrics: string) {
    this.title = title;
    this.artists = artists;
    this.lyrics = lyrics;
  }
}
