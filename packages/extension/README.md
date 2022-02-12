# CodeCharacter 2022 VSCode Extension

An extension for VSCode that allows players to play CodeCharacter from the comfort of their IDE.

## Testing the extension locally

1. Open just the `packages/extension` folder in VSCode.
2. Copy `src/config/config.example.ts` to `src/config/config.ts`.
3. Download the simulator binary from [here](https://github.com/delta/codecharacter-simulator-2022/releases/download/v2022.1.0/main) and save it locally
4. Change the SIMULATOR_PATH in `config.ts` to point to the simulator binary.
5. Run `yarn install`
6. Open the run panel from the left sidebar or do `Ctrl + Shift + D`
7. Click the run button or press `F5` to start the extension. (Wait for the webpack compilation to get over - might take a couple of minutes and refresh it)
