# NPX ESM

Run ESM modules as node programs with npx in a three steps.

1. Install `npx-esm` package:
  ```shell
  npm install -D npx-esm
  ```
2. Create program `index.js`:
  ```js
  export default function() {
    console.log('Hello')
  }
  ```
3. Execute it:
  ```shell
  npx esm index.js
  ```

## API

### `CmdParams`
```text
{
  argv: Array<string>,
  argvHead: Array<string>,
  cwd: string,
  stdin: ReadableStream,
  stdout: WritableStream,
  stderr: WriteableStream,
}
```

The main function receives a command params as the first argument. It contains minimal set of params to execute a command and interact with the user or pipeline.

* `argv` is the list of command line arguments remained after removing executable adn script paths.
* `argvHead` is the list of command line arguments cropped as executable and script paths.
* `cwd` is the current directory.
* `stdin`, `stdout` and `stderr` are I/O streams.

#### Example
```js
async function main({
  argv, // -> ['--help']
  argvHead, // -> ['node', 'script.js']
  cwd, // '/dev/project/esm'
  stdout, // writable stream
  stderr, // writable stream
  stdin, // readable stream
}) {
  stdout.write('OK')
  return 1
}
```

## License

MIT © [Rumkin](https://rumk.in)
