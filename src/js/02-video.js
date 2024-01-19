import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('#vimeo-player');
const KEY_TIME = 'videoplayer-current-time';
const current_Time = JSON.parse(localStorage.getItem(KEY_TIME)) ?? 0;

const player = new Player('vimeo-player');
player.setCurrentTime(current_Time);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      //   console.log('time', seconds);
      localStorage.setItem(KEY_TIME, JSON.stringify(seconds));
      //   console.log(KEY_TIME, JSON.stringify(seconds));
    })
    .catch(function (error) {
      console.log('error: ', error);
    });
}
