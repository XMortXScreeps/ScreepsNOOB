var tower = require('function.tower');
var memoryCleanup = require('function.memoryCleanup');
var actionLogic = require('function.actionLogic');
var spawnLogic = require('function.spawnLogic');

module.exports.loop = function () {

    memoryCleanup.run();

    for(var myRooms in Game.rooms) {
      var room = Game.Rooms[myRooms];
      console.log(room.creeps);
      for(var name in room.creeps) {
        var creep = room.creeps[name];
        spawnLogic.run(creep);
        actionLogic.run(creep);
      }

      tower.run(myRooms)
    }

    console.log('Energy available for use to spawn:' + Game.spawns.Spawn1.room.energyAvailable);
}
