var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleCleaner = require('role.cleaner');
var roleErector = require('role.erector');

module.exports = {

  run: function(creep) {

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
}
