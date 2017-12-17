var drainSources = require('function.drainSources');
var roleUpgrader = require('role.upgrader');

module.exports = {

    // a function to run the logic for this role
    run: function(creep) {
        creep.say(creep.memory.role);
        // if creep is bringing energy to the spawn or an extension but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to the spawn or an extension
        if (creep.memory.working == true) {
            // find closest spawn or extension which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity
            });

            if (structure == undefined) {
              structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                  filter: (s) => ((s.structureType == STRUCTURE_CONTAINER) && (s.store[RESOURCE_ENERGY] < s.storeCapacity))
              });
            }

            // if we found one
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                // look for construction sites
                roleUpgrader.run(creep);
            }
        }
        // if creep is supposed to harvest energy from source
        else {
          drainSources.run(creep);
        }
    }
};
