const canvas = document.getElementById("canva1");
const ctx = canvas.getContext("2d");

const CANVA_WIDTH = (canvas.width = "300");
const CANVA_HEIGHT = (canvas.height = "300");

const playerImg = new Image();
playerImg.src = "./assets/knight.png";

const PLAYER_WIDTH = 86;
const PLAYER_HEIGHT = 86;

let frameX = 0;
let gameFrame = 0;
const staggerFrame = 5;

const animate = () => {
  ctx.clearRect(0, 0, CANVA_WIDTH, CANVA_HEIGHT);
  let position = Math.floor(gameFrame / staggerFrame) % 5;
  frameX = PLAYER_WIDTH * position;
  ctx.drawImage(
    playerImg,
    frameX,
    0,
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
