var tower = require('function.tower');
var memoryCleanup = require('function.memoryCleanup');
var actionLogic = require('function.actionLogic');
var spawnLogic = require('function.spawnLogic');

module.exports.loop = function () {

    memoryCleanup.run();

    for(var myRooms in Game.rooms) {
      //var spawnInRoom = Game.spawns.rooms[myRooms].name;
      //console.log(spawnInRoom);
      var roomName = myRooms.name;
      console.log('Energy available in '+ roomName +' for use to spawn:' + Game.spawns.roomName.room.energyAvailable);
      for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        spawnLogic.run(creep, myRooms);
        actionLogic.run(creep, myRooms);
      }

      tower.run(myRooms)
    }
}
