const program = import('commander');
const key = import('../commands/key');

program
    .command('set')
    .description('Set APO Key -- Get at https://nomics.com')
    .action(key.set);

program
    .command('show')
    .description('Show APO Key -- Get at https://nomics.com')
    .action(key.show);

program
    .command('remove')
    .description('Remove APO Key -- Get at https://nomics.com')
    .action(key.remove);  

program.parse(process.argv);

if (!process.argv[2]) {
    program.outputHelp();
  }