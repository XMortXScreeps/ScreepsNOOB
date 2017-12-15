
module.exports = {
     run: function(creep) {
       creep.say(creep.memory.role);
         if(creep.memory.working == true && creep.carry.energy == 0) {
             creep.memory.working = false;
        }
        else if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
             creep.memory.working = true;
         }


         if(creep.memory.working == true) {
            if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.energy < s.energyCapacity
            });


            if(structure != undefined) {
                if(creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
             }
         }
        else {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }

    }
  }
};
