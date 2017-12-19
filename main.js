var tower = require('function.tower');
var memoryCleanup = require('function.memoryCleanup');
var actionLogic = require('function.actionLogic');
var spawnLogic = require('function.spawnLogic');

module.exports.loop = function () {

    memoryCleanup.run();

    for(var myRooms in Game.rooms) {
      console.log(myRooms.creeps);
      for(var name in myRooms.creeps) {
        var creep = myRooms.creeps[name];
        spawnLogic.run(creep);
        actionLogic.run(creep);
      }

      tower.run(myRooms)
    }

    console.log('Energy available for use to spawn:' + Game.spawns.Spawn1.room.energyAvailable);
}
