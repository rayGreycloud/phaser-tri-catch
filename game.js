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

// Initialize app variables
let catcher, triangles, timer;
let catcherSpeed = 250;
let maxTriangleSpeed = 200;
let showBodies = false;
let current time = 0;
let gameDuration = 20;

// Preload state
function preload() {
  // set background color
  game.stage.backgroundColor = '#eee';

  // Load assets
  game.load.image('catcher', 'assets/semicircle.png');
  game.load.image('triangle', 'assets/triangle.png');

  // Load physics body polygon data
  this.game.load.physics('physics', 'data/data.json');

}

// Create state
function create() {
  // Set world boundaries
  game.world.setBounds(0, 0, width, height+100);
  // Start P2 physics engine
  game.physics.startSystem(Phaser.Physics.P2JS);
  // Initialize game controls
  cursors = game.input.keyboard.createCursorKeys();

  // Initialize catcher
  catcher = game.add.sprite(width*0.5, height*0.8, 'catcher');
  // Enable P2 physics on catcher
  game.physics.p2.enable(catcher, showBodies);
  // Remove default rectangle body
  catcher.body.clearShapes();
  // Add physics body polygon
  catcher.body.loadPolygon('physics', 'semicircle');
  // Change default to remove collision effect on catcher
  catcher.body.kinematic = true;

  // Initialize triangle group
  triangles = game.add.group();
  // Spawn triangle every 800ms except near end of game
  game.time.events.loop(800, function () {
    if (currentTime < gameDuration - 4) {
      spawnTriangle();
    }
  }, game);

  // Add timer display for countdown
  timer = game.add.text(10, 10, gameDuration, { fontsize: "24px" } );
  // Timer logic - 1 second tick
  game.time.events.loop(1000, updateTimer, game);
}
