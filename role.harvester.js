var roleHarvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
      var Spawn1 =
      creep.say(creep.memory.role);
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {

          if (Game.spawns.Spawn1.energy < (Game.spawns.Spawn1.energyCapacity * 0.9)){
            creep.say('if');
            var targets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                      return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                          }
                        });
                        if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                        }
            }
            else {
              creep.say('else');
                var targetsContainers = creep.room.find(FIND_STRUCTURES, {
                  filter: (structure) => {
                        return ((structure.structureType == STRUCTURE_CONTAINER) && (STRUCTURE_CONTAINER.energy < STRUCTURE_CONTAINER.energyCapacity))
                            }
                          });
                          if(targetsContainers.length > 0) {
                              if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                  creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                              }
                            }
	                         }
                         }
                       }
};
module.exports = roleHarvester;
