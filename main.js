var spawnLogic = require('function.spawnLogic')
var tower = require('function.tower');
var memoryCleanup = require('function.memoryCleanup');
var actionLogic = require('function.actionLogic');

var myRooms = 'E41N36';

module.exports.loop = function () {

    memoryCleanup.run();

    for(var name in Game.creeps) {
      spawnLogic.run(creep);
      actionLogic.run(creep);
    }

    tower.run(myRooms)
}
