module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {

    // find closest source
    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    // try to harvest energy, if the source is not in range

    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        // move towards the source
        creep.moveTo(source, {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }
    console.log('Energy available for use to spawn:' + Game.spawns.Spawn1.room.energyAvailable);
  }
