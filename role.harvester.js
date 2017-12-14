var roleHarvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
      creep.say(creep.memory.role);
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {

          if (Spawn1.energy < Spawn1.energyCapacity){
            creep.say('if');
            var targets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                      return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                          }
                        });
            }
            else {
              creep.say('else');
                var targets = creep.room.find(FIND_STRUCTURES, {
                  filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER) &&
                              structure.energy < structure.energyCapacity;
                            }
                          });

            }
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};
module.exports = roleHarvester;
