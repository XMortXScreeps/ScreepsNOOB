var drainSources = require('function.drainSources');
var decideState = require('function.decideState');

module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
        decideState.run(creep);

        // if creep is supposed to transfer energy to the controller
        if (creep.memory.working == true) {

            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // if not in range, move towards the controller
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        // if creep is supposed to get energy
        else {
          drainSources.run(creep);
          }
    }
};
