describe("Tetris", function() {
  // var Play = require('Play');
  // var Song = require('lib/jasmine_examples/Song');
  var player;

  beforeEach(function() {
    player = new Play();
  });

  it("true should be true", function() {
    expect(true).toEqual(true);
  });

 it("player exists", function() {
    expect(player).not.toEqual(undefined);
  });

 it("is playing", function() {
   player.play();
    expect(player.isPlaying).toEqual(true);
   });

   describe("Block", function () {
     it ("has a y value", function () {
       block = new Block();
       expect(block.y).toEqual(5);
     });
      it ("can go down", function () {
       block = new Block();
       expect(block.canGoDown()).toEqual(true);
     });
      it ("can not go down if y is 1", function () {
       block = new Block();
       block.y = 1;
       expect(block.canGoDown()).toEqual(false);
     });
      it ("move down", function () {
       block = new Block();
       var currentY = 10;
       block.y = currentY;
       block.moveDown();
       expect(block.y).toEqual(currentY - 1);
     });
   })
});

function Play() {
}
Play.prototype.play = function() {
  this.isPlaying = true;
};

// TODO: Work out how export works when in another file
// module.exports = Play;

function Block() {
  this.y = 5;
  this.canGoDown = function(){
    var result = this.y > 1;
    return result;
  };
  this.moveDown = function() {
    if (this.canGoDown()){
      this.y -=1;
    }
  };

}



