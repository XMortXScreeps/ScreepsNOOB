var drainSources = require('function.drainSources');
var drainSources = require('function.decideState');

var roleUpgrader = require('role.upgrader');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
      decideState.run(creep);
        // if creep is supposed to repair something
        if (creep.memory.working == true) {
            // find closest structure with less than max hits
            // Exclude walls because they have way too many max hits and would keep
            // our repairers busy forever. We have to find a solution for that later.
            var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

            // if we find one
            if (constructionSite != undefined) {
                // try to repair it, if it is out of range
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            // if we can't fine one
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
