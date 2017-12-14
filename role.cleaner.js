var roleHarvester = require('role.harvester');
var roleCleaner = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity && creep.room.find(FIND_DROPPED_RESOURCES) != undefined) {
            var dropped_energy = creep.room.find(FIND_DROPPED_RESOURCES);
            if(creep.pickup(dropped_energy[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(dropped_energy[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else if (creep.room.find(FIND_DROPPED_RESOURCES) != undefined) {
          roleHarvester.run(creep)
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	  }
};
module.exports = roleCleaner;
