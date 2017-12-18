//comment


var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleCleaner = require('role.cleaner');
var roleErector = require('role.erector');

var tower = require('function.tower');

var myRooms = 'E41N36';
var harvestersMax = 2;
var buildersMax = 1;
var upgradersMax = 5;
var repairersMax = 2;
var cleanersMax;
var erectorsMax = 2;
var towerRepair = true;
var harvesterFloor = 1;

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }



    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    console.log('Repairers: ' + repairers.length);

    var cleaners = _.filter(Game.creeps, (creep) => creep.memory.role == 'cleaner');
    console.log('Cleaners: ' + cleaners.length);

    var erectors = _.filter(Game.creeps, (creep) => creep.memory.role == 'erector');
    console.log('Erector: ' + erectors.length);



       if(harvesters.length < harvestersMax) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'harvester', working: false}});
    }
        if(builders.length < buildersMax && harvesters.length >= harvesterFloor) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], newName,
            {memory: {role: 'builder', working: false}});
    }
        if(upgraders.length < upgradersMax && harvesters.length >= harvesterFloor) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'upgrader', working: false}});
    }
        if(repairers.length < repairersMax && harvesters.length >= harvesterFloor) {
        var newName = 'Repairer' + Game.time;
        console.log('Spawning new repairer: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'repairer', working: false}});
    }
        if(cleaners.length < cleanersMax && harvesters.length >= harvesterFloor) {
        var newName = 'Cleaner' + Game.time;
        console.log('Spawning new cleaner: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'cleaner', working: false}});
    }
        if(erectors.length < erectorsMax && harvesters.length >= harvesterFloor) {
        var newName = 'Erector' + Game.time;
        console.log('Spawning new erector: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'erector', working: false}});
    }



    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});
    }



    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'cleaner') {
            roleCleaner.run(creep, cleanersMax);
        }
        if(creep.memory.role == 'erector') {
            roleErector.run(creep);
        }
    }

    tower.run(myRooms)


}
