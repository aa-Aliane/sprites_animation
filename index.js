"use strict";

const btns = document.getElementsByClassName("btn");
var currentAnimation = "run";
Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentAnimation = e.target.innerHTML;
    console.log(currentAnimation);
  });
});

const canvas = document.getElementById("canva1");
const ctx = canvas.getContext("2d");

const CANVA_WIDTH = (canvas.width = "300");
const CANVA_HEIGHT = (canvas.height = "300");

const playerImg = new Image();
playerImg.src = "./assets/player.png";

const PLAYER_WIDTH = 1344 / 12;
const PLAYER_HEIGHT = 1463 / 11;

let gameFrame = 0;
const staggerFrame = 7;

const spriteAnimations = [];
const AnimationState = [
  {
    name: "run",
    frames: 12,
  },
  {
    name: "run2",
    frames: 12,
  },
  {
    name: "bow",
    frames: 12,
  },
  {
    name: "jump",
    frames: 12,
  },
  {
    name: "doging",
    frames: 12,
  },
  {
    name: "attack",
    frames: 12,
  },
  {
    name: "attack2",
    frames: 12,
  },
  {
    name: "attack3",
    frames: 12,
  },
  {
    name: "attack4",
    frames: 12,
  },
  {
    name: "hurt",
    frames: 7,
  },
];

AnimationState.forEach((state, y_index) => {
  let frames = {
    loc: [],
  };
  for (let x_index = 0; x_index < state.frames; x_index++) {
    let positionX = x_index * PLAYER_WIDTH;
    let positionY = y_index * PLAYER_HEIGHT;
    frames.loc.push({
      x: positionX,
      y: positionY,
    });
  }
  spriteAnimations[state.name] = frames;
});

console.log(
  "🚀 ~ file: index.js:75 ~ AnimationState.forEach ~ spriteAnimations",
  spriteAnimations
);

const animate = () => {
  ctx.clearRect(0, 0, CANVA_WIDTH, CANVA_HEIGHT);
  let position =
    Math.floor(gameFrame / staggerFrame) %
    spriteAnimations[currentAnimation].loc.length;
  let frameX = spriteAnimations[currentAnimation].loc[position].x;
  let frameY = spriteAnimations[currentAnimation].loc[position].y;
  ctx.drawImage(
    playerImg,
    frameX,
    frameY,
    PLAYER_WIDTH,
    PLAYER_HEIGHT,
    0,
    0,
    CANVA_WIDTH,
    CANVA_HEIGHT
  );

  gameFrame++;
  requestAnimationFrame(animate);
};

animate();
