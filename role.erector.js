var roleSwitch = require('function.roleSwitch');
var decideState = require('function.decideState');

var roleBuilder = require('role.builder');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
      decideState.run(creep);
      roleSwitch.run(creep);

        // if creep is supposed to repair something

    }
};
