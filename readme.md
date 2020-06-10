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

## License

MIT © [Rumkin](https://rumk.in)
