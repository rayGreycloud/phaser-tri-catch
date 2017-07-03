// game.js
// Set game parameters
let config = {
  width: 800,
  height: 500,
  renderer: 'Phaser.AUTO',
  parent: 'gameDiv',
  state: {
    preload,
    create,
    update
  }
}

// Create game
let game = new Phaser.Game(config);

// Initialize
let catcher, triangles, timer;
let catcherSpeed = 250;
let maxTriangleSpeed = 200;
let showBodies = false;
let current time = 0;
let gameDuration = 20;

// Preload
function preload() {
  // set background color
  game.stage.backgroundColor = '#eee';

  // Load assets
  game.load.image('catcher', 'assets/semicircle.png');
  game.load.image('triangle', 'assets/triangle.png');

  // Load physics body polygon data
  this.game.load.physics('physics', 'data/data.json');

}
