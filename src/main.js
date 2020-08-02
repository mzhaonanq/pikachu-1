import string from "./css.js";

const player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    demo1: document.querySelector("#demo1"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    "#btnPlay": "start",
    "#btnPause": "stop",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.demo1.innerHTML = string.substr(0, player.n);
    player.ui.demo2.innerText = string.substr(0, player.n);
    player.start();
    player.bindEvents();
  },

  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },

  run: () => {
    player.n += 1;
    if (player.n >= string.length) {
      window.clearInterval(player.id);
    }
    player.ui.demo1.innerHTML = string.substr(0, player.n);
    player.ui.demo2.innerText = string.substr(0, player.n);
    player.ui.demo2.scrollTop = demo2.scrollHeight;
  },
  start: () => {
    return (player.id = setInterval(player.run, player.time));
  },
  stop: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.stop();
    player.time = 300;
    player.start();
  },
  normal: () => {
    player.stop();
    player.time = 100;
    player.start();
  },
  fast: () => {
    player.stop();
    player.time = 0;
    player.start();
  },
};
player.init();
