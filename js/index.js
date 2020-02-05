const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {

    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);
let player;
let cursors;

function preload() {
  this.load.spritesheet('snail', 'images/snail2.png', {frameWidth: 32, frameHeight: 32})
}

function create(){
  player = this.physics.add.sprite(0, 0, 'trainer', 0);
  player.setOrigin(0, 0);
  cursors = this.input.keyboard.createCursorKeys();
}


function update() {
  movePlayer();

}

function movePlayer(){

  player.x = Math.floor(player.x);
  player.y = Math.floor(player.y);
  if((player.x % 32 == 0) && (player.y % 32 == 0)){
    xdir = cursors.right.isDown - cursors.left.isDown;
    ydir = cursors.down.isDown - cursors.up.isDown;


    if(xdir != 0){
      player.setVelocityX(xdir*32);
      player.setVelocityY(0);
    } else {

      player.setVelocityX(0);
    }

    if(ydir != 0){
      player.setVelocityY(ydir*32);
      player.setVelocityX(0);
    } else {
      player.setVelocityY(0);
    }

  }
}
