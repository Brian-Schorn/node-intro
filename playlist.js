var faveSong = require('./favorite-song');

exports.artists = function() {
  return 'Tupac';
};

exports.favoriteSong = function () {
  return faveSong();
};

function private() {
//this does something private


}
