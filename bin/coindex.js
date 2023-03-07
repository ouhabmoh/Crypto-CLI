#!/usr/bin/env node
const program = import("commander");
const pkg = import('../package.json');

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://nomics.com')
    .parse(process.argv);

console.log("hello")