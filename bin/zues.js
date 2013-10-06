#!/usr/bin/env node
void function(){
    var argv = require('optimist').demand(['search', 'c']).string('search.steamid').string('c').argv
    require('../index.js')(argv.c, argv.search, true).pipe(process.stdout)
}()

