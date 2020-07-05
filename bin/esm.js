#!/usr/bin/env node

const execute = require('../src/index')

execute({
  argv: process.argv.slice(2),
  argvHead: process.argv.slice(0, 2),
  cwd: process.cwd(),
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr,
})
.catch(error => {
  console.error(error)
  return 1
})
.then((code = 0) => process.exit(code))
