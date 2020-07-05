const assert = require('assert')
const stream = require('stream')

const execute = require('..')

async function test() {
  let chunks = []
  let stdout = new stream.Writable({
    write(chunk, encoding, done) {
      chunks.push(chunk)
      done()
    }
  })

  let result = await execute({
    argv: ['./fixtures/hello.mjs'],
    argvHead: ['node'],
    cwd: __dirname,
    stdout
  })
  stdout.end()

  // Test result
  assert.equal(result, 0, 'Result should be equal `true`')

  // Test output
  const output = Buffer.concat(chunks).toString('utf8')
  assert.equal(output, 'Hello', 'Output is "Hello"')
}

test()
.catch((error) => {
  console.error('Test should not throw errors. But it thrown:')
  console.error(error)

  process.exit(1)
})
