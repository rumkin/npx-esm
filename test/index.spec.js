const assert = require('assert')

const execute = require('..')

async function test() {
  let result = await execute({
    argv: ['./fixtures/hello.mjs'],
    argvHead: ['node'],
    cwd: __dirname,
  })

  assert.equal(result, 0, 'Result should be equal `true`')
}

test()
.catch((error) => {
  console.error('Test should not throw errors. But it thrown:')
  console.error(error)

  process.exit(1)
})
