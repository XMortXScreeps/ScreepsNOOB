
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleCleaner = require('role.cleaner');
var roleErector = require('role.erector');

var spawnLogic = require('function.spawnLogic')
var tower = require('function.tower');
var memoryCleanup = require('function.memoryCleanup');

var myRooms = 'E41N36';


module.exports.loop = function () {

    memoryCleanup.run();
    
    spawnLogic.run(creep);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'cleaner') {
            roleCleaner.run(creep, cleanersMax);
        }
        if(creep.memory.role == 'erector') {
            roleErector.run(creep);
        }
    }

    tower.run(myRooms)

    console.log('Energy available for use to spawn:' + Game.spawns.Spawn1.room.energyAvailable);

}
