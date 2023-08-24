const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/resultSync.txt',
`This is how you writeFile synchronously,
Here is the result ${first}, ${second}`,
{flag:'a'}
)
console.log('done with this task')
console.log('starting the next one')
// *Note* by default, running the code again would overwrite the data unless you use...
// {flag: 'a'} to tell the file system to append