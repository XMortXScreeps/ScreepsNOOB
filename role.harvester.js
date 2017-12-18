var drainSources = require('function.drainSources');
var decideState = require('function.decideState');

var roleUpgrader = require('role.upgrader');

module.exports = {

    // a function to run the logic for this role
    run: function(creep, harvesters, harvesterFloor) {
        decideState.run(creep);
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

        if (harvesters.length >= harvesterFloor){
          return towerRepair == true;
        } else {
          return towerRepair == false;
        }
    }
};
