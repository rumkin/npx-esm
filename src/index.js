const path = require('path')

async function execute({
  argv: [script, ...argv],
  argvHead = [],
  cwd = process.cwd(),
}) {
  const {default: main} = await import(
    path.resolve(cwd, script)
  )

  if (typeof main !== 'function') {
    return
  }

  const result = await main({
    argv,
    argvHead: [...argvHead, script],
  })

  switch (result) {
    case true:
      return 0;
    case false:
      return 1;
    case undefined:
      return 0;
    default:
      if (typeof result === 'number') {
        return result
      }
      else {
        throw new TypeError(`Unepected program result value: ${result}`)
      }
  }
}

module.exports = execute
