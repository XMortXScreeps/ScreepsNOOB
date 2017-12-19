var tower = require('function.tower');
var memoryCleanup = require('function.memoryCleanup');
var actionLogic = require('function.actionLogic');
var spawnLogic = require('function.spawnLogic');

//var myRooms = 'E41N36';

module.exports.loop = function () {

    memoryCleanup.run();

    for(var name in Game.creeps) {
      var creep = Game.creeps[name];
      spawnLogic.run(creep);
      actionLogic.run(creep);
    }

    for(var myRooms in Game.rooms) {
    //  var myRooms = Game.rooms[name];
      tower.run(myRooms)
    }

    console.log('Energy available for use to spawn:' + Game.spawns.Spawn1.room.energyAvailable);

}
