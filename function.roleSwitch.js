var drainSources = require('function.drainSources');

var roleBuilder = require('role.builder');

module.exports = {

run: function(creep)

var role = creep.memory.role;

  switch(role) {
      case 'erector':
      if (creep.memory.working == true) {

          var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {

              filter: (s) => s.hits < (s.hitsMax / 40) && s.structureType == STRUCTURE_WALL
          });
          // if we find one
          if (structure != undefined) {
              // try to repair it, if it is out of range
              if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                  // move towards it
                  creep.moveTo(structure, {visualizePathStyle: {stroke: '#ffffff'}});
              }
          }
          // if we can't fine one
          else {
              // look for construction sites
              roleBuilder.run(creep);
          }
      }
      // if creep is supposed to harvest energy from source
      else {
        drainSources.run(creep);
      }
          break;
  }
};
