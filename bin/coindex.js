#!/usr/bin/env node
const program = import("commander");
import pkg from '../package.json';

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://nomics.com')
    .command('check', 'Check coin price info')
    .parse(process.argv);

console.log("hello")