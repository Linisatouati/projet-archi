// types/spotify.js

export const SpotifyAlbum = {
  id: '',
  name: '',
  images: [{ url: '', height: 0, width: 0 }],
  artists: [{ name: '' }]
};

export const SpotifyTrack = {
  id: '',
  name: '',
  album: SpotifyAlbum,
  artists: [{ name: '', id: '' }]
};

export const SpotifyArtist = {
  id: '',
  name: '',
  genres: [],
  images: [{ url: '', height: 0, width: 0 }],
  popularity: 0
};
